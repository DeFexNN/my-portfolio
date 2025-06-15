import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    name: 'DeFexUnpacker',
    imageUrl: '/images/defex_unpacker.png',
    description: 'Особистий сайт-портфоліо з адаптивним дизайном',
    category: '.NET Development',
    projectUrl: 'https://github.com/DeFexNN/DeFexUnpacker',
    technologies: ['C#', 'Xaml', 'WPF'],
    fullDescription: 'DeFexUnpacker is a user-friendly tool designed to unpack releases from online-fix.me. The program features a modern graphical user interface (GUI) that simplifies the unpacking process.',
    features: [
      'Modern GUI: Intuitive interface for easy navigation and operation.',
      'Automatic Unpacking: Supports archives protected with the password online-fix.me.',
      'Efficiency: Utilizes the SharpCompress library for fast and reliable archive extraction.',
      'Customizable Output: Allows users to select the destination folder for unpacked files.'
    ],
  }
];
