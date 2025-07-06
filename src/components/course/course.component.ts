import { Component } from '@angular/core';

interface Video {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  duration: string;
}

@Component({
  selector: 'app-course',
  standalone: false,
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  videos: Video[] = [
    {
      title: 'Clase 1: Introducción a Angular',
      description: 'Primera clase del curso de Angular donde aprenderemos los conceptos básicos.',
      url: 'https://youtu.be/9WAkWwrqrLU',
      thumbnail: 'assets/imgs/lessons/clase_1.png',
      duration: '1:30:00'
    },
    {
      title: 'Clase 2: Componentes y Directivas',
      description: 'Aprende sobre componentes y directivas en Angular.',
      url: 'https://youtu.be/vyGkKzAIsiM',
      thumbnail: 'assets/imgs/lessons/clase_2.png',
      duration: '1:45:00'
    },
    {
      title: 'Clase 3: Servicios y Dependencias',
      description: 'Implementación de servicios y manejo de dependencias.',
      url: 'https://youtu.be/HrpgPeR0Z30',
      thumbnail: 'assets/imgs/lessons/clase_3.png',
      duration: '1:40:00'
    },
    {
      title: 'Clase 4: Routing y Navegación',
      description: 'Sistema de rutas y navegación en Angular.',
      url: 'https://youtu.be/aq13xXATw10',
      thumbnail: 'assets/imgs/lessons/clase_4.png',
      duration: '1:35:00'
    },
    {
      title: 'Clase 5: Formularios y Validación',
      description: 'Creación y validación de formularios en Angular.',
      url: 'https://youtu.be/4Izql23uxlU',
      thumbnail: 'assets/imgs/lessons/clase_5.png',
      duration: '1:50:00'
    },
    {
      title: 'Clase 6: HTTP y APIs',
      description: 'Comunicación con APIs y manejo de peticiones HTTP.',
      url: 'https://youtu.be/sIcJnVqMFs4',
      thumbnail: 'assets/imgs/lessons/clase_6.png',
      duration: '1:55:00'
    },
    {
      title: 'Clase 7: Estado y Gestión de Datos',
      description: 'Manejo del estado y gestión de datos en la aplicación.',
      url: 'https://youtu.be/5ly1f6ADUX8',
      thumbnail: 'assets/imgs/lessons/clase_7.png',
      duration: '1:40:00'
    },
    {
      title: 'Clase 8: Despliegue de la Aplicación',
      description: 'Aprende a desplegar tu aplicación Angular en producción.',
      url: 'https://youtu.be/iYG_sz43YcE',
      thumbnail: 'assets/imgs/lessons/clase_8.png',
      duration: 'Próximamente'
    }
  ];

}
