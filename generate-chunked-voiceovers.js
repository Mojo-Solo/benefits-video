// Generate chunked ElevenLabs voiceovers for perfect sync
const fs = require('fs');
const https = require('https');

// Read API key from .env file
const envContent = fs.readFileSync('.env', 'utf8');
const API_KEY = envContent.match(/ELEVEN_LABS_API=(.+)/)[1].trim();
const VOICE_ID = 'EXAVITQu4vr4xnSDxMaL'; // Sarah - Professional female voice

// Voiceover chunks for perfect timing
const chunks = [
    // Scene 1 chunks
    {
        name: 'intro-welcome',
        scene: 1,
        text: 'Welcome to an exciting preview of your enhanced 2025 employee benefits package.'
    },
    {
        name: 'intro-feedback',
        scene: 1,
        text: "This year, we've listened to your feedback and created a comprehensive benefits program that truly supports you and your family."
    },
    {
        name: 'intro-investing',
        scene: 1,
        text: "With increased coverage, significant cost savings, and new wellness initiatives, we're investing in what matters most - you."
    },
    
    // Scene 2 chunks
    {
        name: 'dates-intro',
        scene: 2,
        text: "Let's review the important dates for your 2025 benefits."
    },
    {
        name: 'dates-january',
        scene: 2,
        text: 'Starting January first, your enhanced medical, dental, and vision coverage begins - with a fifteen percent reduction in premiums.'
    },
    {
        name: 'dates-march',
        scene: 2,
        text: 'On March first, our new wellness program launches, along with an increased H-S-A match of up to three thousand dollars.'
    },
    {
        name: 'dates-december',
        scene: 2,
        text: 'Remember, December thirty-first is when your coverage period ends, with automatic renewal available for your convenience.'
    },
    
    // Scene 3 chunks
    {
        name: 'benefits-intro',
        scene: 3,
        text: "Now, let's explore the game-changing benefits we're introducing for 2025."
    },
    {
        name: 'benefits-support',
        scene: 3,
        text: "You'll have access to twenty-four seven mental health support, zero-dollar telemedicine visits, and comprehensive wellness rewards worth up to twelve hundred dollars."
    },
    {
        name: 'benefits-hsa',
        scene: 3,
        text: "We've doubled our H-S-A contribution to three thousand dollars, and introduced industry-leading fertility and family planning coverage."
    },
    {
        name: 'benefits-cta',
        scene: 3,
        text: 'Visit benefits dot company dot com to start your enrollment today. Your future is our investment.'
    }
];

// Generate voiceover for each chunk
async function generateChunkVoiceover(chunk, index) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            text: chunk.text,
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

        console.log(`🎙️ Generating voiceover for: ${chunk.name}...`);

        const req = https.request(options, (res) => {
            if (res.statusCode === 200) {
                const filename = `vo-${chunk.name}.mp3`;
                const file = fs.createWriteStream(filename);
                res.pipe(file);
                
                file.on('finish', () => {
                    file.close();
                    console.log(`✅ Generated: ${filename}`);
                    resolve(filename);
                });
            } else {
                console.error(`❌ Error for ${chunk.name}:`, res.statusCode);
                res.on('data', (chunk) => {
                    console.error(chunk.toString());
                });
                reject(new Error(`Failed to generate ${chunk.name}`));
            }
        });

        req.on('error', (error) => {
            console.error(`❌ Request failed for ${chunk.name}:`, error);
            reject(error);
        });

        req.write(data);
        req.end();
    });
}

// Process all chunks with delay to avoid rate limiting
async function generateAll() {
    console.log('🚀 Starting chunked voiceover generation...\n');
    console.log(`📊 Total chunks to generate: ${chunks.length}\n`);
    
    const results = [];
    
    for (let i = 0; i < chunks.length; i++) {
        try {
            const filename = await generateChunkVoiceover(chunks[i], i);
            results.push({
                ...chunks[i],
                filename
            });
            
            // Wait 2 seconds between requests to avoid rate limiting
            if (i < chunks.length - 1) {
                console.log('⏳ Waiting 2 seconds...\n');
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        } catch (error) {
            console.error('Failed to generate voiceover:', error);
        }
    }
    
    console.log('\n✅ All voiceover chunks generated!');
    console.log('\n📁 Files created:');
    results.forEach(r => {
        console.log(`  Scene ${r.scene}: ${r.filename}`);
    });
    
    // Create a manifest file
    const manifest = {
        chunks: results,
        totalChunks: results.length,
        generatedAt: new Date().toISOString()
    };
    
    fs.writeFileSync('voiceover-manifest.json', JSON.stringify(manifest, null, 2));
    console.log('\n📋 Manifest saved: voiceover-manifest.json');
}

generateAll();