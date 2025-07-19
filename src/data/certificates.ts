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

export const certificates: CertificateProvider[] = [
  {
    provider: "STEYP",
    logo: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/23-11-2021/steyp-logo.svg",
    subtitle: "Development Courses",
    courses: [
      {
        title: "Tech Schooling",
        certificates: [
          {
            title: "UI Engineer",
            link: "https://steyp.com/nanodegree/tech-schooling/certification/obq0ct7kw1pck9bq4vym/"
          },
          {
            title: "Backend Developer",
            link: "https://steyp.com/nanodegree/tech-schooling/certification/3xegoichivniea40z8f6/"
          },
          {
            title: "Web Application Developer",
            link: "https://steyp.com/nanodegree/tech-schooling/certification/d5eplg07t8bn6s1a0mk6/"
          },
          {
            title: "DevOps Engineer",
            link: "https://steyp.com/nanodegree/tech-schooling/certification/5lz2yymray2f1p3l7tee/"
          }
        ]
      }
    ]
  },
  {
    provider: "META",
    logo: "https://pngimg.com/d/meta_PNG5.png",
    subtitle: "Professional Certification",
    courses: [
      {
        title: "Professional Certification",
        certificates: [
          {
            title: "Meta Front-End Developer",
            link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/TDTHD7C8RSK7"
          }
        ]
      }
    ]
  },
  {
    provider: "Github",
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    subtitle: "Professional Certification",
    courses: [
      {
        title: "Professional Certification",
        certificates: [
          {
            title: "GitHub Foundations",
            link: ""
          }
        ]
      }
    ]
  }
];