export interface Events {
    id: string
    image: string
    title: string
    date: string
  }
  
  export interface EventsProps {
    certifications: Events[]
    title?: string
    className?: string
  }
  
  