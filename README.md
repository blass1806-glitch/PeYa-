# Reparto Quito — React + TypeScript (paquete para iPhone)

Este paquete evita incluir carpetas ocultas. El archivo `deploy.yml` está visible en la carpeta principal y se usa para configurar la publicación en GitHub Pages.

## Subir el proyecto desde iPhone

1. En Archivos, toca el ZIP para descomprimirlo.
2. Abre GitHub en Safari y entra en tu repositorio.
3. Sube los archivos y carpetas visibles que están dentro de `reparto-quito-react`. Puedes hacerlo desde la web de GitHub si te permite seleccionar los elementos; no subas una carpeta `node_modules`.
4. Para agregar el flujo de publicación, entra en tu repositorio y pulsa **Add file → Create new file**.
5. En el campo del nombre escribe exactamente `.github/workflows/deploy.yml`. GitHub creará las carpetas ocultas por ti.
6. Abre el archivo `deploy.yml` que está en la carpeta principal de este paquete, copia todo su contenido y pégalo en el archivo nuevo de GitHub.
7. Guarda con **Commit changes**.
8. Ve a **Settings → Pages** y selecciona **GitHub Actions** como método de publicación.
9. Ve a **Actions** y espera a que termine el flujo de despliegue. La URL aparece en **Settings → Pages**.

## Importante

- Sube la estructura completa: `index.html`, `package.json`, `vite.config.ts`, `src/`, `public/` y los archivos de configuración `.json`.
- No basta con subir solo `index.html`, porque esta versión usa React + TypeScript y necesita compilarse.
- No subas `deploy.yml` a la raíz como sustituto del flujo; es una copia visible para que puedas copiar su contenido al archivo `.github/workflows/deploy.yml`.
- Requiere conexión a internet para el mapa y servicios externos.
- Este prototipo guarda los datos localmente en el navegador de cada dispositivo; no incluye cuentas ni sincronización entre usuarios.

## Ejecutar en un computador

Requiere Node.js 20 o superior:

```bash
npm install
npm run dev
```

Para compilar:

```bash
npm run build
```
