
export default function Stories(){
  const usuarioStory =[
    {
      url:"assets/img/9gag.svg",
      alt:"9gag",
      name:"9gag"
    },
    {
      url:"assets/img/meowed.svg",
      alt:"meowed",
      name:"meowed"
    },
    {
      url:"assets/img/barked.svg",
      alt:"barked",
      name:"barked"
    },
    {
      url:"assets/img/nathanwpylestrangeplanet.svg",
      alt:"nathanwpylestrangeplanet",
      name:"nathanwpylestrangeplanet"
    },
    {
      url:"assets/img/wawawicomics.svg",
      alt:"wawawicomics",
      name:"wawawicomics"
    },
    {
      url:"assets/img/respondeai.svg",
      alt:"respondeai",
      name:"respondeai"
    },
    {
      url:"assets/img/filomoderna.svg",
      alt:"filomoderna",
      name:"filomoderna"
    },
    {
      url:"assets/img/memeriagourmet.svg",
      alt:"memeriagourmet",
      name:"memeriagourmet"
    },
  ]

    function UserStory(props){
        return(
            <div className="story">
                <div className="imagem">
                <img src={props.url} alt={props.alt}/>
                </div>
                <div className="usuario">
                {props.name}
                </div>
            </div>
        )
    }

    return  (    
            <div className="stories">
                {usuarioStory.map((usuario)=> <UserStory url={usuario.url} alt={usuario.alt} name={usuario.name} />)}
                <div className="setinha">
                  <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>
    )
}