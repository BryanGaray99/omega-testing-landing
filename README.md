# Omega Testing - Angular Application

Landing page profesional para Omega Testing, una plataforma de automatización de pruebas con inteligencia artificial.

## 🚀 Tecnologías

- **Angular 17**: Framework principal
- **TypeScript**: Lenguaje de programación
- **Reactive Forms**: Formularios reactivos
- **Angular Animations**: Animaciones
- **CSS Grid & Flexbox**: Layout responsive
- **Font Awesome**: Iconografía

## 📦 Instalación

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)

### Pasos de instalación

1. **Instalar dependencias**:

   ```bash
   npm install
   ```

2. **Instalar Angular CLI globalmente** (si no lo tienes):
   ```bash
   npm install -g @angular/cli
   ```

## 🏃‍♂️ Desarrollo

### Iniciar servidor de desarrollo

```bash
npm run dev
# o
npm start
# o
ng serve
```

La aplicación estará disponible en `http://localhost:3000`

### Otros comandos útiles

- **Build para producción**:

  ```bash
  npm run build:prod
  ```

- **Build con observación de cambios**:

  ```bash
  npm run watch
  ```

- **Ejecutar tests**:
  ```bash
  npm test
  ```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/           # Componentes reutilizables
│   │   ├── navbar/
│   │   ├── about-section/
│   │   ├── plans-section/
│   │   ├── docs-section/
│   │   ├── contact-section/
│   │   └── footer/
│   ├── pages/               # Páginas principales
│   │   └── landing-page/
│   ├── app.module.ts        # Módulo principal
│   ├── app-routing.module.ts # Configuración de rutas
│   └── app.component.ts     # Componente raíz
├── styles.css               # Estilos globales
├── index.html              # HTML principal
└── main.ts                 # Punto de entrada
```

## 🎨 Características

### Componentes modulares

- **NavbarComponent**: Navegación fija con menú responsive
- **AboutSectionComponent**: Sección hero con logo, slogan y beneficios
- **PlansSectionComponent**: Planes de precios con diseño responsive
- **DocsSectionComponent**: Documentación técnica con ejemplos de código
- **ContactSectionComponent**: Formulario de contacto con validación
- **FooterComponent**: Pie de página con enlaces sociales

### Funcionalidades implementadas

- ✅ Diseño completamente responsive
- ✅ Formularios reactivos con validación
- ✅ Navegación suave entre secciones
- ✅ Animaciones CSS
- ✅ TypeScript tipado
- ✅ Arquitectura modular
- ✅ SEO optimizado

### Responsive Design

- **Desktop**: Layout completo con 3 columnas para planes
- **Tablet**: Adaptación a 2 columnas
- **Mobile**: Layout de una columna con navegación hamburguesa

## 🎯 Paleta de Colores

- **Primario**: `#41CF41` (Verde principal)
- **Secundario**: `#68DE68` (Verde hover)
- **Texto**: `#000000` (Negro)
- **Fondo**: `#FFFFFF` (Blanco)
- **Fondo secundario**: `#F8F9FA` (Gris claro)
- **Oscuro**: `#2A2A2E` (Gris oscuro)
- **Neutro**: `#E4E4E4` (Gris neutro)

## 🔧 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Build para desarrollo
- `npm run build:prod` - Build optimizado para producción
- `npm run watch` - Build con observación de cambios
- `npm test` - Ejecuta las pruebas unitarias
- `npm run dev` - Servidor de desarrollo con live reload

## 📱 Compatibilidad

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Dispositivos móviles iOS/Android

## 🚢 Deployment

### Build de producción

```bash
npm run build:prod
```

Los archivos optimizados se generarán en la carpeta `dist/omega-testing/`.

### Configuración del servidor

Para servir la aplicación en producción, asegúrate de configurar el servidor para:

- Servir `index.html` para todas las rutas (Angular routing)
- Configurar headers de caché apropiados
- Habilitar compresión gzip

## 📄 Licencia

© 2024 Omega Testing. Todos los derechos reservados.
