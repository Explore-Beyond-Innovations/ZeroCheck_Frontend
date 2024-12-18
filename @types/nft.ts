export interface NFTCertification {
    id: string
    title: string
    image: string
    date?: string
  }
  
  export interface NFTCertificationsProps {
    certifications: NFTCertification[]
    title?: string
    className?: string
  }
  
  