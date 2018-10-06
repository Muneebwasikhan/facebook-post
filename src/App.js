import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import FbPost from './screens/FbPost';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [
        {
          pictures:[
            "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/39522355_535857300177346_2200493830879313920_n.jpg?_nc_cat=104&oh=ebe92d861abe8251f6ff048ef57b2b57&oe=5C48CEA4",
            "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/38246128_519245841838492_6292848960973307904_n.jpg?_nc_cat=100&oh=29149bbeefff1d31dc5306a32f3d6fbe&oe=5C5F0DB2",
            "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/37130297_500122463750830_2386078899588038656_n.jpg?_nc_cat=107&oh=8258262bd3830c12a0e06f4e06810fc9&oe=5C17C337",
            "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/35418398_475923819504028_5126158156287705088_n.jpg?_nc_cat=107&oh=3032e429f56307570e5e286a597c6da7&oe=5C4E5206",
            "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/29342967_437428213353589_1241868301622050816_n.jpg?_nc_cat=109&oh=2b67093c48d454930866dbaa8838ef08&oe=5C5DA884",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg"
          ],
          name: "Muneeb Khan",
          catagory: "May 15, 2017 · Edited",
          avatar: "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/18447156_314528862310192_30087917341378604_n.jpg?_nc_cat=111&oh=7c726ad9b8734c390ace2d2fb8642740&oe=5C18F29B",
          status: "I keep my head held high and smile, because there are people who will kill to see me fall��",
          likes: "1.5K",

        },
        {
          pictures:[
            "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/39118167_10214173337300072_3362743463287193600_n.jpg?_nc_cat=103&oh=47dc69e2171581e7f460912e28ff346d&oe=5C56B69D",
            "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/23519242_10212186012178186_2164557142459520006_n.jpg?_nc_cat=109&oh=380dabe563292d5125280baac1b74d20&oe=5C1A6018",
            "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/32565088_10213538152700854_3014190645125316608_n.jpg?_nc_cat=103&oh=54f47b5267940af6ce82686cab596ee1&oe=5C4C97F1",
            "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/12359818_10206488807151621_5290337710795915665_n.jpg?_nc_cat=103&oh=95430b14bc07bddfaeb37ae99f0ba33f&oe=5C59C22A",
            
          ],
          name: "Mohammad Kashif Sulaiman",
          catagory: "November 13, 2017 · Edited",
          avatar: "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/39118167_10214173337300072_3362743463287193600_n.jpg?_nc_cat=103&oh=47dc69e2171581e7f460912e28ff346d&oe=5C56B69D",
          status: "Beard is Sunnah! Ab rakhlo yaar :) — with Talha Khan.",
          likes: "30K",

        },
        {
          pictures:[
            "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/37639546_2095474760779730_7843501823217369088_n.jpg?_nc_cat=109&oh=e5366f5f3d45936e29b91286b012ac62&oe=5C53BE22",
            "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/26047309_1956821044645103_3281524647109455909_n.jpg?_nc_cat=104&oh=71e484537fe21b1eed0b5507e480bdde&oe=5C4B1EE0",
            
          ],
          name: "Salman Saleem",
          catagory: "September 25 at 11:56 AM",
          avatar: "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/37639546_2095474760779730_7843501823217369088_n.jpg?_nc_cat=109&oh=e5366f5f3d45936e29b91286b012ac62&oe=5C53BE22",
          status: "I am not changed i just grew up and you could try it too ..",
          likes: "987",

        },
        {
          pictures:[
            "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/30441261_1004804326333299_3735708604976594944_n.jpg?_nc_cat=107&oh=6637514bb603a9667e648c6dbd6002cd&oe=5C4B3CFE"
          ],
          name: "Osama Khan",
          catagory: "Yesterday at 10:31 PM ",
          avatar: "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-0/p206x206/19260391_855716127908787_3791156224774191579_n.jpg?_nc_cat=106&oh=674189185c01b91c21497e5eefd08a01&oe=5C174C42",
          status: "- Because brothers don't let each other wander in the dark alone . ",
          likes: "759",

        },
        {
          pictures:[
            "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/39094951_529782624118147_4904910582550888448_n.jpg?_nc_cat=109&oh=1c8c7b4f0d3ec382f7841b9e2fdac084&oe=5C4F40CE"
          ],
          name: "Muneeb Khan",
          catagory: "August 13",
          avatar: "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/18447156_314528862310192_30087917341378604_n.jpg?_nc_cat=111&oh=7c726ad9b8734c390ace2d2fb8642740&oe=5C18F29B",
          status: "Having a teacher like you is a blessing from above .☺️☺️",
          likes: "27.9K",

        },
        {
          pictures:[
            "https://www.queenstownnz.co.nz/assets/Uploads/_resampled/CroppedFocusedImageWyIxMDI0IiwiNDg1IiwieSIsMzVd/Wakatipu-Basin-Aerial-View-2006-03-Cropped.jpg",
            "http://www.spanishandsurf.net/wordpress/wp-content/uploads/Paisaje_25-520x265.jpg",
            "https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
            "https://www.queenstownnz.co.nz/assets/Uploads/_resampled/CroppedFocusedImageWyIxMDI0IiwiNDg1IiwieSIsMzVd/Wakatipu-Basin-Aerial-View-2006-03-Cropped.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg",
            "http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg"
          ],
          name: "Nature",
          catagory: "Sponsored",
          avatar: "https://dnoracnbzh225.cloudfront.net/wp-content/uploads/2017/07/pierce-justin-profile.jpg",
          status: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting remaining essentially unchanged",
          likes: "1.5K",

        }
      ],
      
    }

  }
  render() {
    const {
      posts
    } = this.state;
    return (
      
      <div style={{backgroundColor: "lightgray"}}>
      <nav class="navbar navbar-light bg-light" style={{backgroundColor: "#223480",color: "white",fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"}}>
  <span class="navbar-brand mb-0 h1">FACEBOOK POSTS</span>
</nav>
       {
        posts.map((value,index) => {
          return <FbPost pictures={value.pictures} status={value.status} name={value.name} likes={value.likes} catagory={value.catagory} avatar={value.avatar} />
        })
      }
      </div>
    );
  }
}

export default App;
