import avatar1 from "@/public/images/avatar/avatar-1.jpg";
import avatar2 from "@/public/images/avatar/avatar-2.jpg";

export const notifications = [
  {
    id: 1,
    fullName: "José Tiago",
    role: "Frontend Developer",
    message:
      "Olá, Carlos! Como está o andamento do nosso projeto?",
    avatar: avatar1,
    status: "online",
    unreadmessage: 0,
    date: "10:10h",
  },
  {
    id: 2,
    fullName: "Carlos Eduardo",
    role: "UI/UX Designer",
    message:
      "Olá, boa tarde! O figma teve um nova atualização, você viu?",
    avatar: avatar2,
    status: "online",
    unreadmessage: 1,
    date: "11:20h",
  }
];
