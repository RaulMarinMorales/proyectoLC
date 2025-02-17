# Proyecto Angular - AppAngular

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 19.0.2.

## 📌 Requisitos previos
Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:
- [Node.js](https://nodejs.org/) (Versión recomendada: LTS)
- [Angular CLI](https://angular.dev/tools/cli) (Instalar con `npm install -g @angular/cli` si no lo tienes ya)
- [XAMPP](https://www.apachefriends.org/) para gestionar la base de datos MySQL


---

## ⚙️ Configuración del Backend del formulario de torneo de baloncesto realizado por Raul Marin Morales
El backend del proyecto se encuentra en un repositorio separado llamado **back-ProyectoLibreConfiguracion**. Para ejecutarlo junto con el frontend, sigue estos pasos:

### 1️⃣ Clonar ambos repositorios en carpetas diferentes
```bash
git clone https://github.com/RaulMarinMorales/proyectoLC.git

git clone https://github.com/RaulMarinMorales/back-ProyectoLibreConfiguracion.git
```

### 2️⃣ Instalar dependencias
#### 📂 Frontend (Angular)
```bash
cd proyectoLC
npm install
```
#### 📂 Backend (Node.js + Express)
En el cmd escribir lo siguiente:
```bash
cd back-ProyectoLibreConfiguracion
npm install
```

### 3️⃣ Iniciar los servidores
#### 🔹 Iniciar el backend
Asegúrate de que MySQL esté corriendo en XAMPP y luego ejecuta:
En el cmd escribir lo siguiente:
```bash
cd back-ProyectoLibreConfiguracion
node server.js
```

#### 🔹 Iniciar el frontend
En una nueva terminal, ejecuta:
```bash
cd proyectoLC
ng serve
```

Ahora, la aplicación Angular y el backend estarán corriendo simultáneamente.

---

## 🛠️ Generación de Código
Angular CLI incluye herramientas poderosas para generar código. Para crear un nuevo componente, usa:
```bash
ng generate component nombre-del-componente
```
Para ver todos los esquemas disponibles (componentes, directivas, pipes, etc.), ejecuta:
```bash
ng generate --help
```

---

## 📚 Recursos Adicionales
Para más información sobre Angular CLI y sus comandos, visita la [documentación oficial](https://angular.dev/tools/cli).

