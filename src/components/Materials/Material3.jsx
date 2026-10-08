import style from './page3.module.css'

const Material3 = () => {

    const card = [{id:1,
        name:"Hyunjin",
                   address:"Japan",
                   comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatibus lor te jeens."
    },
    {   id:2,
        name:"Hyunjin",
                   address:"Japan",
                   comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatibus lor te jeens."
    },
    {   id:3,
        name:"Hyunjin",
                   address:"Japan",
                   comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatibus lor te jeens."
    },
{   id:4,
    name:"Hyunjin",
                   address:"Japan",
                   comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatibus lor te jeens."
    },{ id:5,
        name:"Hyunjin",
                   address:"Japan",
                   comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatibus lor te jeens."
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

                <div className={style.materialdiv}>
                <img src="https://imgs.search.brave.com/pdr3rl_l2lsO04EzmMDYUzI6guNH-mQo_Ig_EXfAoOU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/NTcwLzY0OS9zbWFs/bC9jbG9zZS11cC1w/cm9maWxlLXZpZXct/b2YtcGVuc2l2ZS11/cHNldC1hZnJpY2Fu/LWFtZXJpY2FuLW1h/bi1sb29rLWluLWRp/c3RhbmNlLXRoaW5r/aW5nLW9mLXBlcnNv/bmFsLXByb2JsZW1z/LXRob3VnaHRmdWwt/c2FkLWJpcmFjaWFs/LW1hbGUtZmVlbC1k/ZXByZXNzZWQtbG9z/dC1pbi10aG91Z2h0/cy1wb25kZXJpbmct/aGF2aW5nLWRpbGVt/bWEtcGhvdG8uanBn" alt="" />

                <h3>{item.name}</h3>
                <span>{item.address}</span>
                <p>"{item.comments}"</p>
            </div>
            
        </div>
        ))}

        </div>
    </div>
  )

}

export default Material3