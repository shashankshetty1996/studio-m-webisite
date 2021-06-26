import CoverPhoto1 from "../../assets/dashboard/cover1.webp";
import CoverPhoto2 from "../../assets/dashboard/cover2.webp";
import CoverPhoto3 from "../../assets/dashboard/cover3.webp";
import CoverPhoto4 from "../../assets/dashboard/cover4.webp";
import CoverPhoto5 from "../../assets/dashboard/cover5.webp";
import CoverPhoto6 from "../../assets/dashboard/cover6.webp";
import CoverFallBackPhoto1 from "../../assets/dashboard/cover1.jpg";
import CoverFallBackPhoto2 from "../../assets/dashboard/cover2.jpg";
import CoverFallBackPhoto3 from "../../assets/dashboard/cover3.jpg";
import CoverFallBackPhoto4 from "../../assets/dashboard/cover4.jpg";
import CoverFallBackPhoto5 from "../../assets/dashboard/cover5.jpg";
import CoverFallBackPhoto6 from "../../assets/dashboard/cover6.jpg";

export interface Image {
  webp: string;
  jpg: string;
  name: string;
  place: string;
}

export const ImageList: Image[] = [
  { webp: CoverPhoto1, jpg: CoverFallBackPhoto1, name: "Dr. Ramesh Jain Residence", place: "Mandya" },
  { webp: CoverPhoto2, jpg: CoverFallBackPhoto2, name: "Ramesh Residence", place: "Davanagere" },
  { webp: CoverPhoto3, jpg: CoverFallBackPhoto3, name: "Jidaga Apartment Yalahanka", place: "Bengaluru" },
  { webp: CoverPhoto4, jpg: CoverFallBackPhoto4, name: "Ayurvedic College and Hospital", place: "Bidar" },
  { webp: CoverPhoto5, jpg: CoverFallBackPhoto5, name: "Dr. Ramesh Jain Residence interior", place: "Mandya"  },
  { webp: CoverPhoto6, jpg: CoverFallBackPhoto6, name: "Dr. Ramesh Jain Residence interior", place: "Mandya"  },
];