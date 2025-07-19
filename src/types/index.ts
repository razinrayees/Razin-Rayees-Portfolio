export interface Project {
  title: string;
  description: string;
  image: string;
  type: string;
  link: string;
  technologies?: string[];
  githubUrl?: string;
}

export interface Certificate {
  title: string;
  link: string;
}

export interface Course {
  title: string;
  certificates: Certificate[];
}

export interface CertificateProvider {
  provider: string;
  logo: string;
  subtitle: string;
  courses: Course[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}