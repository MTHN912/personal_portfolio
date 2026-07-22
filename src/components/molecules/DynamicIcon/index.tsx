// DynamicIcon - renders react-icons dynamically by name
'use client';

import { type CSSProperties } from 'react';
import {
  FaCode, FaServer, FaSitemap, FaDatabase, FaCloud, FaTools, FaLaptopCode,
  FaRobot, FaDesktop, FaUsers, FaJava, FaComments, FaPuzzlePiece,
  FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaTiktok,
  FaDiscord, FaEnvelope, FaCalendar, FaAward, FaLayerGroup, FaGraduationCap,
  FaMapMarkerAlt, FaPhone, FaClock, FaBriefcase, FaExternalLinkAlt, FaDownload,
  FaSearch, FaTimes, FaBars, FaMoon, FaSun, FaChevronDown, FaChevronUp,
  FaArrowUp, FaHeart, FaStar, FaGitAlt, FaDocker, FaAws,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {
  SiTypescript, SiJavascript, SiPython, SiReact, SiNextdotjs, SiTailwindcss,
  SiVuedotjs, SiNodedotjs, SiNestjs, SiGraphql, SiPostgresql, SiMongodb,
  SiRedis, SiGooglecloud, SiDocker, SiKubernetes,
  SiJest, SiCypress, SiGit, SiFigma,
  SiApple, SiLinux, SiGo, SiHtml5, SiJira,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: CSSProperties }>> = {
  // Font Awesome
  FaCode, FaServer, FaSitemap, FaDatabase, FaCloud, FaTools, FaLaptopCode,
  FaRobot, FaDesktop, FaUsers, FaJava, FaComments, FaPuzzlePiece,
  FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaTiktok,
  FaDiscord, FaEnvelope, FaCalendar, FaAward, FaLayerGroup, FaGraduationCap,
  FaMapMarkerAlt, FaPhone, FaClock, FaBriefcase, FaExternalLinkAlt, FaDownload,
  FaSearch, FaTimes, FaBars, FaMoon, FaSun, FaChevronDown, FaChevronUp,
  FaArrowUp, FaHeart, FaStar, FaGitAlt, FaDocker, FaXTwitter, FaAws,
  // Aliases for mock data
  SiAmazonwebservices: FaAws,
  SiOpenai: FaRobot,
  SiGithubcopilot: FaCode,
  SiGithubactions: FaGitAlt,
  SiVisualstudiocode: VscCode,
  SiVisualstudio: VscCode,
  // Simple Icons
  SiTypescript, SiJavascript, SiPython, SiReact, SiNextdotjs, SiTailwindcss,
  SiVuedotjs, SiNodedotjs, SiNestjs, SiGraphql, SiPostgresql, SiMongodb,
  SiRedis, SiGooglecloud, SiDocker, SiKubernetes,
  SiJest, SiCypress, SiGit, SiFigma,
  SiApple, SiLinux, SiGo, SiHtml5, SiJira,
  // VS Code Icons
  VscCode,
};

interface DynamicIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function DynamicIcon({ name, size = 20, className }: DynamicIconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    return <FaCode size={size} className={className} />;
  }
  return <IconComponent size={size} />;
}
