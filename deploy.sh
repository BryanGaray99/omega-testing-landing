#!/bin/bash

# Omega Testing - GitHub Pages Deployment Script
# Este script despliega la aplicación Angular a GitHub Pages

echo "🚀 Iniciando despliegue a GitHub Pages..."

# Verificar que estamos en la rama correcta
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Advertencia: No estás en la rama 'main'. Rama actual: $CURRENT_BRANCH"
    read -p "¿Continuar con el despliegue? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Despliegue cancelado"
        exit 1
    fi
fi

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Verificar que angular-cli-ghpages está instalado
if ! npm list angular-cli-ghpages > /dev/null 2>&1; then
    echo "📦 Instalando angular-cli-ghpages..."
    npm install --save-dev angular-cli-ghpages
fi

# Ejecutar tests (opcional - comentar si quieres saltarte los tests)
echo "🧪 Ejecutando tests..."
npm run test -- --no-watch --no-progress --browsers=ChromeHeadless || {
    echo "❌ Los tests fallaron. ¿Continuar con el despliegue?"
    read -p "(y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Despliegue cancelado"
        exit 1
    fi
}

# Build para producción con base-href para GitHub Pages
echo "🔨 Construyendo aplicación para producción..."
npm run build:github || {
    echo "❌ Error en el build de producción"
    exit 1
}

# Desplegar a GitHub Pages
echo "🚀 Desplegando a GitHub Pages..."
npx angular-cli-ghpages --dir=dist/omega-testing || {
    echo "❌ Error en el despliegue"
    exit 1
}

echo "✅ ¡Despliegue completado exitosamente!"
echo "🌐 Tu aplicación estará disponible en: https://tu-usuario.github.io/omega-testing-angular/"
echo ""
echo "📝 Nota: Puede tomar unos minutos en aparecer debido al cache de GitHub Pages"
