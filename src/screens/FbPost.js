import React, { Component } from "react";
import FbImageLibrary from "react-fb-image-grid";
import FacebookEmoji from "react-facebook-emoji";
import "./../App.css";

class FbPost extends Component {
  constructor(props) {
    super();
    this.state = {
      pictures: [
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
      name: "Muneeb Khan",
      hoverLike: false,
      like: "sm",
      love: "sm",
      wow: "sm",
      yay: "sm",
      angry: "sm",
      haha: "sm",
      sad: "sm",
      liked: false
    };
  }
  hoverOn() {
    const { reaction } = this.state;
    this.setState({ reaction: true });
  }
  hoverOut() {
    const { reaction } = this.state;
    // this.setState({ reaction: false });
  }
  liked(){
    const { liked } = this.state;
    this.setState({liked: !liked,reaction: false})
  }
  
  render() {
    console.log(this.props);
    const {
      liked,
      reaction,
      like,
      love,
      wow,
      yay,
      angry,
      haha,
      sad
    } = this.state;
    const {
      pictures,
      name,
      status,
      likes,
      catagory,
      avatar,
    } = this.props;
    return (
      <div>
        <div
          className="container contain"
          style={{
            borderTop: "1px solid rgb(230, 230, 230)",
            marginTop: "20px",
            backgroundColor: "white"
          }}
        >
          <div className="flex topBar border">
            <div className="flex-center avatar-flex">
              <img
                style={{ width: "40px", borderRadius: "50%" }}
                src={avatar}
              />
            </div>
            <div className="flex-center padding-left-5">
              <div style={{ marginLeft: "3px" }}>
                <h4 style={{ color: "#223480" }}>{name}</h4>
                <p>{catagory}</p>
              </div>
            </div>
          </div>
          <p
            style={{
              widht: "100%",
              maxHeight: "80px",
              overflow: "hidden",
              padding: "5px 10px 0px 5px",
              backgroundColor: "white",
              marginBottom: "5px"
            }}
          >
            {status}
          </p>
        </div>
        <div style={{ backgroundColor: "white", width: "100%" }}>
          <FbImageLibrary images={pictures} widht="140%" />
        </div>
        <div className="container" style={{ backgroundColor: "white" }}>
          <div style={{ widht: "100%", height: "30px" }}>
            <div className="likesOf">
             {!liked && <p>
                <FacebookEmoji type="like" size="xxs" />
                <FacebookEmoji type="love" size="xxs" />
                <FacebookEmoji type="wow" size="xxs" />
                {likes} likes
              </p>}
              {liked && <p>
                <FacebookEmoji type="like" size="xxs" />
                <FacebookEmoji type="love" size="xxs" />
                <FacebookEmoji type="wow" size="xxs" />
                You and {likes} other likes
              </p>}
            </div>
            <div className="reactionDiv" onMouseLeave={() => this.setState({ reaction: false })}>
            <div>
                {reaction && (
                  <div style={{ marginTop: "-50px" }}>
                    <span
                      onMouseEnter={() => this.setState({ like: "md" })}
                      onMouseLeave={() => this.setState({ like: "sm" })}
                    >
                      <FacebookEmoji
                        type="like"
                        size={like}
                        class="emojilike"
                      />
                    </span>
                    <span
                      onMouseEnter={() => this.setState({ love: "md" })}
                      onMouseLeave={() => this.setState({ love: "sm" })}
                    >
                    <FacebookEmoji type="love" size={love} /></span>
                    <span
                      onMouseEnter={() => this.setState({ wow: "md" })}
                      onMouseLeave={() => this.setState({ wow: "sm" })}
                    >
                    <FacebookEmoji type="wow" size={wow}/></span>
                    <span
                      onMouseEnter={() => this.setState({ yay: "md" })}
                      onMouseLeave={() => this.setState({ yay: "sm" })}
                    >
                    <FacebookEmoji type="yay" size={yay} /></span>
                    <span
                      onMouseEnter={() => this.setState({ angry: "md" })}
                      onMouseLeave={() => this.setState({ angry: "sm" })}
                    ><FacebookEmoji
                    type="angry"
                    size={angry}
                   
                  /></span>
                    <span
                      onMouseEnter={() => this.setState({ haha: "md" })}
                      onMouseLeave={() => this.setState({ haha: "sm" })}
                    >
                    <FacebookEmoji type="haha" size={haha} /></span>
                    <span
                      onMouseEnter={() => this.setState({ sad: "md" })}
                      onMouseLeave={() => this.setState({ sad: "sm" })}
                    >
                    <FacebookEmoji type="sad" size={sad} /></span>
                    
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex LCS">
            <div
              className="flex_1 border"
              onClick={this.reaction}
              onMouseEnter={() => this.hoverOn()}
              onMouseLeave={() => this.hoverOut()}
              onClick={() => this.liked()}
            >
              
              {liked && <p style={{color: "223480"}}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMYSURBVGhD7VkxiBNBFI2KqKCFiiJyXrKbFc/AyWVnVw4RLQUbQdFCCy20ELQRrK6YSeQ8RCxOULEQtBHuEEU7G7nGzkYbbSxUsBUERZFL/DP8vcsufyc7kmTmMA9ekdn/M+9l/s4fJqUhhlhBGJnkW/yIf/Uj0VZk/KfPxJy/j2/HkJUBL2yOL5lI830wMb0Nw9yHxkjbY/wphrkPnRHJStg4gqFuo5sReGcWMNRtdDUS8dbuiPsY7i66G4F3JRQXMdxdFDEC2/EDDHcX1bDJSPFpvsRwdwFbrCCEp+hF4hmGuwq+Gox8psSnyMRNTHATsLUeJYVnWIn5KUxxE2DkCSU8Td7aVec7McU9yEMh1P5vWnyKbzHFTYDAqxnBJMHsDKb0HrUa3yi7rQlHJm9twHQFKKsPlPAsvZCfpr6vCPccuLEJp6NRaKfJ0Iv4K0yXJg5SMb2mx8QfWNFHo+Mzm3HqNMDIdypRR/jCT5heAlMPqZh+EQy9Lp2cX4PTLwOEvKMSdEyMyLKEzz+yz/tNLxZnlPhOQGm8oIJ1TIxA7ij1vN+EH/+2Et8JOUgF62jbCJwOppX4TsA7coUM1tCuEd7yokasxHcCBk/QCfm0aQTmvqaEZ1Hw6J2iLSOwY31h7P5aJTyLsfj6VipJR6ulFYqzSjgF015iubRmlWgKpr3E6opQO1YCEGTUS+wZ4a0gataVaAqmvcSOEdh2mZiS8+bCtJfYMCIPt+XDfL0SnAdwe5xKzqOt0qrE4oISnAfTXmLLCLwCd5XgPJj2EotGmkqwDia9xJKRxWA/rymxOmh6yTcQvADily4XLBhZrDJxWQntBhBF9BLeKjM+Jp/L+6hkfNBGYO5Dcr5CoHoJjP0Kgtl18nk55hPL44M1AmV/Sc5XCLm9hInnfszPgak3ydjAS8vkBt+klwx8RUzuw0x6SWIEym2HfI+omF5RlXeR3SoB/kdeSBSceT5iGqyKuEPF9ILShBfy8zhVcci/xcDMvJZMzKVv1NurqqxxDFbpHhn/DwQDj2U5levNvTjJEEMM8X+jVPoLqI6gk5uUeGsAAAAASUVORK5CYII=" />
                Like
              </p>}
              {!liked && <p>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANJSURBVGhD7Zlb6AxRHMdXcivkXiikKMqDXBLiheSBRCQelEtRpISUB0WSa27hBaGUe/FCUVJKUuJFKQ8oL0QRkev382tPttkzc2b+7c7O1H7q8/A7c3bO/ubsnt+ZmUqbNuWin3wn/1b9Ji/JQbJUjJMk8Et+lD+q8Qs5UJYGl8hziyqV/vKxpO06DWUhmgiMkJ8k7XNoKAO+RGCLpP2+RSUgLpE+8ov8I0fSUHTiEoEzkmPrLCo4SYmslBw7bVHBmSjjEpklOXbHooJzSvJl+RlFWSA5dsOiAjNcUgB/ytE0RNgmSWS/RQXGzcZ5i+q5JTm+xKKCEpqNzpItC8vvEBqKipuNCxbVM11y/JlFBSU0G7BXksgei5pET0m1zWo3CaHZAHa/9FkmfedKYy+ZyBvJIFm9K9PMxjDp+3xWGeOc7Cu9fJZ0pIg9SSH96P9appkNZvy29J0rrYzp7m0eShaPOtwXY3uRBneF2QSGZqORDJUvJWMvpyHKTcnBeRaFif5Ukmaj0WyUjHnUogg0cnCDRWFcIszGPcmNU17sk4y926IImyQHD1oUxiXCfyQPRsnJcrPk4lFUJ8k6Fkm+2DWLwuSZyFTJF2c85y7pZYKkA6tDGvJMZLBkmWdhYcy3sov0wpMOOn2wKEzePy0YIN3quoKGOFwtCVZP0YpEYL1k3CMWxZCllrQqkUOScb0rliNLLckzkfFyttwh3YpFWyxZakleibitv5MktstEstSSvBLhWTH39yxCjMfmtrtMZKGk81WLksn7P9JbUhoYcw0NSWSpJa34s6+VjHnCogSy1JJWJHJYMuZOiwKkrSV5JDJF8kBvrmSjyPuW33KsDBJXS3gAPVN2taj5iUyTnL9Wkki7O/fWkk7S3W/zCg2anQgXjmdj7KtcIjNkany1hAcM3yXtT2kQef1HesgHkrHYnqTG1ZIDFv1nvjwrWdnAJfJeLq7KbWgzWCUZK9MTfFdLrlgUj0uk1keyGRyTnD/T8zBXS7jBd1faJy9q6PdVXpa8gmZV2Sp9/TviUnlccl5+2qlWKwfvyKN3Y0m+ksAtqO94IySJ1TIzXG2uckhWsNqn6qz3J6Wvb0e8KPk5jZFt2rRpU6n8A2UoeB0U5ja3AAAAAElFTkSuQmCC" />
                Like
              </p>}
            </div>

            <div className="flex_1 border">
              <p>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHGSURBVGhD7dnPK2VxGMfxM1nN0EwmlDKJUdM0f4JSSg0bKytRmIXlLJC90mxHJEpWMyllY8NCdkT8BxZKKSXDDPIjv96f7+3kdpx7JbfmUc+7XnW/59yj79O9t6t7Is/znlw7NnCJW2MO8Qt1yNsY4ouu8ceQY8R7+4d6pKZXQk/SBT0ogbVqMAPtcxfFeNAa9IRvYWW3IqxDe+3WgWTnuMHbsLJdHzTIz7BKpBNHmYfmiz8G42GVyAf5D/kg1vJBrOWDWMsHsZYPYi0fxFo+iLV8EGv5INbyQaz16CAnmYfm60TOQfT7qk5Wh5XthqG9/girRLPQyemwslsl9qG9NupAsi84hZ6wiC40pShHrj4j7ZpCaMEg9qA9LiBnX6F7EHpiLptI6xMukHZNoS3jPfJWhn78ht5u2fRH9KqlNQqdX0XyukKZRCte4VnFb703YXVfLfRr/gHe6YD14kFKwyqT7lcsQccHdMB6VdBm/4bVfSPQ8RVoKPN9hzY8H1ZR9BpT0LEdfID5dBdVX5i6o9WMDmxBQ2zjI8zXAN141KbPoP/H9FjmkP15MZ1uBccblyvoy0gDvqh6MYEhtKECnue9qKLoDnfwMkieelPtAAAAAElFTkSuQmCC" />
                Comment
              </p>
            </div>

            <div className="flex_1 border">
              <p>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMGSURBVGhD7dhbqExRHMfxcb9TFAmF3BJyScrlQSGXB5EQD8cLwhMPRFIoISTEgwelEEoKLx4kJBKJhEQi92vkfv1+z5lV0zRzzpnrmV37V5/O7D1z1tr/PWuvtfck4sSJEydOnDhxCkpLNKp5Gd10wQecR2d3RDVj8S/pCYYjkkktRF8wF5FLKOQK9iRf/8VmNEFkEgq5WL2VSCzED7jvNDogEkkvxIzBS7j/Hvqj4pOpENMd1+F7HzEVFZ1JyFSIaYVD8P3fWIUGXW/sfBCW4DAu4zG+wYPUBWTLSliInzuC1ihrhmIv3iIccKrveIX7WIzaMgUunP6fQ64HSp7JuIpwwL/gyr0Vc9AbDptc0w9e/LbpCRiHkqQPTiEUcBPLUcxbD6djp2Xb/4m6vsmcMx+uynbwADNQqjSGC6YLp/3tQzMUFFffnbBBL8h1aI5yxJNnv9rojnzjbHQANvQaE1CudMRZ2LeTxjTknd2woRfo644yZSAcvvb9HKORdxbBhpxaB7ujTJmOT7BvZ8ZuyDseuBe2F5src65pC9cBp2GfP0Yk99UWh/Fa/IFFHIRPlnnHGeMabGyLO2qJ49iFbD1O4Abew/9NdwzZ0gbH4eecUFag4CyADTpGW7gjLa4la+BBh+kxE2/V3+BZcjvTvZbpCdcjP/MOE1FwnFZDx6nrhF+7Z/4cwoHKs+dB+MDkfZYH0QupQyLb3a8ZD4v1/TvwJBUlVbBRn+ZCRiIMNXntHMVMtENdyVbIMrhy+95J1Keteuc2bHg2XEl3IFx8flPeZrdHLkkvxG99P9zn0NyAot66D0M44K6wY7cd65uQz02gSS3En4YuJbc/YxaKnm2wA6e98M08ggUWklCIzydPk68fYghKklsIZ8q/PhM4vRaaUEjghNEJJYkNh2tBPggVowgzCqHdXWiKksXbgtCZs9IAFCte3BYwr3qrxNmOUIjPz5HNGViEi1O+s1NF5C4sxDk90gk/YfqrSGTjo6xFfEVRV9iGyGosrXkZJ06cOBWVROI/MuHqrMa6vYgAAAAASUVORK5CYII=" />
                Share
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FbPost;
