import style from './page3.module.css'

const Material3 = () => {

    const card = [{id:1,
        name:"Hyunjin",
                   address:"Japan",
                   comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatibus."
    },
    {   id:2,
        name:"Hyunjin",
                   address:"Japan",
                   comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatibus."
    },
    {   id:3,
        name:"Hyunjin",
                   address:"Japan",
                   comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatibus."
    },
{   id:4,
    name:"Hyunjin",
                   address:"Japan",
                   comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatibus."
    },{ id:5,
        name:"Hyunjin",
                   address:"Japan",
                   comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatibus."
    }];

  return (
    <div className={style.Materials3}>
        <div className={style.material3_heading}>
        <h4>TESTIMONIALS</h4>
        <h1>Our Client Reviews</h1>
        </div>

        <div className={style.card}>
        {card.map((item)=>(

        <div key={item.id}  className={style.materialcard}>

            
                <img src="https://www.gettyimages.in/photos/people-profile-silhouette" alt="" />
                <div className="materialdiv">
                <h4>{item.name}</h4>
                <span>{item.address}</span>
                <p>{item.comments}</p>
            </div>
            
        </div>
        ))}

        </div>
    </div>
  )
}

export default Material3