interface SocialProps {
    title: string,
    icon: string,
    link: string
}

const Social = ({title, icon, link} : SocialProps) => {
    return (<a href={link} target="_blank" className="lg:w-64 w-44 lg:h-12 h-9 flex flex-col justify-between items-center">
      <img className="lg:mb-10 mb-6" src={icon} />
      <h3 className="text-slate-800 text-2xl font-bold">{title}</h3>
    </a>
    )
  }
  
  export default Social