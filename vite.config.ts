import MillionLint from '@million/lint';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), MillionLint.vite()],
    test: {
        environment: 'jsdom', // Establece jsdom como entorno de pruebas
        globals: true, // Habilita las funciones globales de Jest como `expect`
        setupFiles: './src/setupTests.ts', // Archivo de configuración para las pruebas
    },
    optimizeDeps: {
        exclude: ['lucide-react'],
    },
});
