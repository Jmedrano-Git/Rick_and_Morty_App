# Rick & Morty Universe

Aplicación web desarrollada con React y Vite que consume la API pública de Rick and Morty.  
La aplicación permite visualizar personajes, ubicaciones y episodios mediante una interfaz sencilla construida con Bootstrap 5.

---

## 📌 Descripción breve del proyecto

Este proyecto consume datos desde la API oficial de Rick & Morty:

https://rickandmortyapi.com/api

Incluye dos vistas principales:

### ✅ **Home (/)**  
- Hero con título del proyecto  
- Breve descripción  
- Listado simple de personajes destacados  

### ✅ **Entities (/entities)**  
- Selector para elegir entre Characters, Locations y Episodes  
- Listado dinámico según la categoría seleccionada  
- Cada entidad muestra **3 propiedades principales**  
- Consumo de API mediante Axios  

---

## 🛠 Tecnologías usadas

- **Vite** (entorno de desarrollo)
- **React** (framework principal)
- **React Router DOM** (navegación)
- **Axios** (consumo de API)
- **Bootstrap 5** (estilos y diseño responsive)

Instalación de dependencias principales:


---

## 🚀 Pasos para ejecutar el servidor

### 1️⃣ Clonar el repositorio

```
git clone https://github.com/Jmedrano-Git/Rick_and_Morty_App.git
```

### 2️⃣ Ingresar al directorio

```
cd Rick_and_Morty_App
```
### 3️⃣ Instalar dependencias

```
npm install
```

### 4️⃣ Ejecutar el proyecto

```
npm run dev
```

Link: http://localhost:5173/

---

## 📁 Estructura del proyecto

```

src/
├─ api/
│ └─ rickApi.js
├─ components/
│ └─ Navbar.jsx
├─ pages/
│ ├─ Home.jsx
│ ├─ Entities.jsx
├─ App.jsx
└─ main.jsx

```
---
## 🤖 App 

# Desplegada y con su video testing
Youtube: https://youtu.be/yPVsd2VBuas
Netifly: https://harmonious-frangollo-2db4f7.netlify.app/
