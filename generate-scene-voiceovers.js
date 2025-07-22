// Generate separate ElevenLabs voiceovers for each scene
const fs = require('fs');
const https = require('https');

// Read API key from .env file
const envContent = fs.readFileSync('.env', 'utf8');
const API_KEY = envContent.match(/ELEVEN_LABS_API=(.+)/)[1].trim();
const VOICE_ID = 'EXAVITQu4vr4xnSDxMaL'; // Sarah - Professional female voice

// Scene scripts
const scenes = [
    {
        name: 'scene1',
        duration: 8,
        text: `Welcome to an exciting preview of your enhanced 2025 employee benefits package.

This year, we've listened to your feedback and created a comprehensive benefits program that truly supports you and your family.

With increased coverage, significant cost savings, and new wellness initiatives, we're investing in what matters most - you.`
    },
    {
        name: 'scene2',
        duration: 8,
        text: `Let's review the important dates for your 2025 benefits.

Starting January first, your enhanced medical, dental, and vision coverage begins - with a fifteen percent reduction in premiums.

On March first, our new wellness program launches, along with an increased H-S-A match of up to three thousand dollars.

Remember, December thirty-first is when your coverage period ends, with automatic renewal available for your convenience.`
    },
    {
        name: 'scene3',
        duration: 8,
        text: `Now, let's explore the game-changing benefits we're introducing for 2025.

You'll have access to twenty-four seven mental health support, zero-dollar telemedicine visits, and comprehensive wellness rewards worth up to twelve hundred dollars.

We've doubled our H-S-A contribution to three thousand dollars, and introduced industry-leading fertility and family planning coverage.

Visit benefits dot company dot com to start your enrollment today. Your future is our investment.`
    }
];

// Generate voiceover for each scene
async function generateSceneVoiceover(scene, index) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            text: scene.text,
            model_id: "eleven_monolingual_v1",
            voice_settings: {
                stability: 0.5,
                similarity_boost: 0.75,
                style: 0.0,
                use_speaker_boost: true
            }
        });

        const options = {
            hostname: 'api.elevenlabs.io',
            path: `/v1/text-to-speech/${VOICE_ID}`,
            method: 'POST',
            headers: {
                'Accept': 'audio/mpeg',
                'xi-api-key': API_KEY,
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        console.log(`🎙️ Generating voiceover for ${scene.name}...`);

        const req = https.request(options, (res) => {
            if (res.statusCode === 200) {
                const filename = `voiceover-${scene.name}.mp3`;
                const file = fs.createWriteStream(filename);
                res.pipe(file);
                
                file.on('finish', () => {
                    file.close();
                    console.log(`✅ Generated: ${filename}`);
                    resolve(filename);
                });
            } else {
                console.error(`❌ Error for ${scene.name}:`, res.statusCode);
                res.on('data', (chunk) => {
                    console.error(chunk.toString());
                });
                reject(new Error(`Failed to generate ${scene.name}`));
            }
        });

        req.on('error', (error) => {
            console.error(`❌ Request failed for ${scene.name}:`, error);
            reject(error);
        });

        req.write(data);
        req.end();
    });
}

// Process all scenes with delay to avoid rate limiting
async function generateAll() {
    console.log('🚀 Starting scene voiceover generation...\n');
    
    for (let i = 0; i < scenes.length; i++) {
        try {
            await generateSceneVoiceover(scenes[i], i);
            
            // Wait 2 seconds between requests to avoid rate limiting
            if (i < scenes.length - 1) {
                console.log('⏳ Waiting 2 seconds...\n');
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        } catch (error) {
            console.error('Failed to generate voiceover:', error);
        }
    }
    
    console.log('\n✅ All scene voiceovers generated!');
    console.log('📁 Files created:');
    console.log('  - voiceover-scene1.mp3');
    console.log('  - voiceover-scene2.mp3');
    console.log('  - voiceover-scene3.mp3');
}

generateAll();