import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');
const projectsDir = path.join(assetsDir, 'projects');

async function compressImage(inputPath, outputPath, options = {}) {
    const { maxWidth = 600, quality = 80 } = options;

    try {
        const metadata = await sharp(inputPath).metadata();
        const isLarge = metadata.width > maxWidth;

        let pipeline = sharp(inputPath);

        if (isLarge) {
            pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
        }

        await pipeline
            .webp({ quality })
            .toFile(outputPath);

        const originalSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

        console.log(`✓ ${path.basename(inputPath)}: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (${savings}% saved)`);

        return { original: originalSize, compressed: newSize };
    } catch (err) {
        console.error(`✗ Error processing ${inputPath}:`, err.message);
        return null;
    }
}

async function main() {
    console.log('🖼️  Compressing images...\n');

    let totalOriginal = 0;
    let totalCompressed = 0;

    // Compress avatars (smaller size for avatars)
    const avatars = ['ahmad-avatar.png', 'tamer-avatar.png'];
    for (const avatar of avatars) {
        const inputPath = path.join(assetsDir, avatar);
        const outputPath = path.join(assetsDir, avatar.replace(/\.(png|jpg|jpeg)$/, '.webp'));
        if (fs.existsSync(inputPath)) {
            const result = await compressImage(inputPath, outputPath, { maxWidth: 200, quality: 85 });
            if (result) {
                totalOriginal += result.original;
                totalCompressed += result.compressed;
            }
        }
    }

    // Also handle the jpeg avatar
    const jpegAvatar = 'tj-avatar.jpeg';
    const jpegInput = path.join(assetsDir, jpegAvatar);
    const jpegOutput = path.join(assetsDir, 'tj-avatar.webp');
    if (fs.existsSync(jpegInput)) {
        const result = await compressImage(jpegInput, jpegOutput, { maxWidth: 200, quality: 85 });
        if (result) {
            totalOriginal += result.original;
            totalCompressed += result.compressed;
        }
    }

    // Compress project images
    if (fs.existsSync(projectsDir)) {
        const files = fs.readdirSync(projectsDir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

        for (const file of files) {
            const inputPath = path.join(projectsDir, file);
            const outputPath = path.join(projectsDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

            const result = await compressImage(inputPath, outputPath, { maxWidth: 600, quality: 80 });
            if (result) {
                totalOriginal += result.original;
                totalCompressed += result.compressed;
            }
        }
    }

    console.log(`\n📊 Total: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB → ${(totalCompressed / 1024 / 1024).toFixed(2)}MB`);
    console.log(`💾 Saved: ${((totalOriginal - totalCompressed) / 1024 / 1024).toFixed(2)}MB (${((totalOriginal - totalCompressed) / totalOriginal * 100).toFixed(1)}%)`);
}

main().catch(console.error);
