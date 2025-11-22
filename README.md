# portfolio
# 🌟 Portfolio Personal - Javier Galián

Portfolio web personal desarrollado con HTML5 y CSS3 puro, diseñado para mostrar mis proyectos, habilidades y experiencia como Desarrollador Web.

![Portfolio Preview](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Descripción

Portfolio web moderno y responsive que presenta mi trabajo como desarrollador web. Incluye secciones interactivas con animaciones y efectos visuales atractivos, manteniendo un diseño limpio y profesional.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz oscura con acentos en azul (#4A90E2)
- 📱 **Responsive**: Adaptado para dispositivos móviles, tablets y escritorio
- 🔄 **Tarjetas Flip**: Skills interactivos con efecto 3D al hacer hover
- 🎭 **Animaciones Suaves**: Transiciones fluidas en todos los elementos
- 🖼️ **Proyectos Flip**: Sistema de tarjetas giratorias para mostrar múltiples proyectos
- ⚡ **Performance**: Sin dependencias externas pesadas, carga ultra rápida
- 🌐 **Navbar Fija**: Navegación siempre accesible

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos avanzados con Flexbox, Grid y animaciones
- **Font Awesome**: Iconos para redes sociales
- **Google Fonts**: Tipografía Montserrat

## 📂 Estructura del Proyecto

```
portfolio/
│
├── index.html          # Página principal
├── style.css           # Estilos principales
│
├── img/                # Carpeta de imágenes
│   ├── foto.jpg        # Foto de perfil
│   ├── cesur.png       # Logo CESUR
│   ├── react.png       # Logo React
│   ├── angular.png     # Logo Angular
│   ├── laravel.png     # Logo Laravel
│   ├── pokemon.jpg     # Proyecto Pokémon
│   ├── perros.jpg      # Proyecto Adopción
│   └── [skills icons]  # Iconos de tecnologías
│
└── README.md           # Este archivo
```

## 🚀 Instalación y Uso

### Opción 1: Clonar el repositorio

```bash
# Clonar el repositorio
git clone https://github.com/javigalii/portfolio.git

# Entrar al directorio
cd portfolio

# Abrir con tu navegador favorito
open index.html
```

### Opción 2: Descarga directa

1. Descarga el proyecto como ZIP
2. Extrae los archivos
3. Abre `index.html` en tu navegador

### Opción 3: Live Server (Recomendado para desarrollo)

```bash
# Si tienes VS Code con Live Server instalado
# Click derecho en index.html > Open with Live Server
```

## 🎯 Secciones del Portfolio

### 1. **Hero Section**
- Foto de perfil con efecto hover
- Presentación personal impactante
- CTA visual atractivo

### 2. **Sobre Mí**
- Descripción profesional
- Enfoque en desarrollo web

### 3. **Formación**
- Grid 2×2 con cursos y certificaciones
- Efecto hover con animación
- CESUR DAW + Cursos especializados

### 4. **Skills**
- 23 tecnologías organizadas en tarjetas flip
- Lenguajes: Java, JavaScript, PHP, Python
- Frameworks: React, Angular, Laravel, Spring Boot
- Herramientas: Git, GitHub, VS Code, IntelliJ
- Bases de datos: MySQL, MariaDB, Oracle

### 5. **Proyectos**
- Sistema de tarjetas con flip activado por botón
- Juego Pokémon (JavaFX + SQLite)
- Sistema de Adopción de Perros (Spring Boot + MySQL)
- Botón "Ver más proyectos" para descubrir más

### 6. **Contacto**
- Links a redes sociales con efecto hover
- Email, GitHub, LinkedIn
- Footer con copyright

## 🎨 Paleta de Colores

```css
--primary-color: #4A90E2      /* Azul principal */
--secondary-color: #2756BA    /* Azul secundario */
--background-dark: #0D0D0D    /* Fondo oscuro */
--background-medium: #1A1A1A  /* Fondo medio */
--background-light: #252525   /* Fondo claro */
--text-color: #E0E0E0         /* Texto principal */
--text-light: #A0A0A0         /* Texto secundario */
```

## 📱 Responsive Breakpoints

- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px

## ⚡ Características Técnicas

### Animaciones CSS
- Flip 3D en tarjetas de skills
- Flip activado por checkbox en proyectos
- Efectos hover con transform y scale
- Animación de brillo (glow) continua

### Performance
- Sin librerías JavaScript pesadas
- Imágenes optimizadas
- CSS minificado en producción (recomendado)
- Lazy loading para imágenes

## 🔧 Personalización

### Cambiar colores

Edita las variables CSS en `style.css`:

```css
:root {
  --primary-color: #TU_COLOR;
  --secondary-color: #TU_COLOR;
}
```

### Añadir proyectos

Duplica el bloque de proyecto en `index.html`:

```html
<div class="project-card">
  <div class="project-inner">
    <div class="project-front">
      <!-- Tu contenido -->
    </div>
    <div class="project-back">
      <!-- Tu contenido -->
    </div>
  </div>
</div>
```

### Añadir skills

Añade un nuevo `card-container` en la sección skills:

```html
<div class="card-container">
  <div class="card">
    <div class="front"><img src="/img/tu-skill.png" alt="skill" /></div>
    <div class="back">Nombre Skill</div>
  </div>
</div>
```

## 🌐 Deploy

### GitHub Pages

1. Sube tu proyecto a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama `main` y carpeta `root`
4. Tu portfolio estará en `https://tuusuario.github.io/portfolio`

### Netlify

```bash
# Arrastra la carpeta del proyecto a Netlify Drop
# O conecta tu repositorio de GitHub
```

### Vercel

```bash
vercel --prod
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Eres libre de usar, modificar y distribuir este código.

## 👤 Autor

**Francisco Javier Galián Piñero**

- 📧 Email: galianpinerojavier@gmail.com
- 🐙 GitHub: [@javigalii](https://github.com/javigalii)
- 💼 LinkedIn: [franciscojaviergalian](https://linkedin.com/in/franciscojaviergalian)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

**Desarrollado con ❤️ por Javier Galián**
