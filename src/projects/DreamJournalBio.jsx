function DreamJournalBio() {
    return (
      <div id="dreamBio" className="cardProject">
        {/* <div className="background-container">
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
        </div> */}
        <div className="dreamBioOpacity">
        <div className="content">
          <h4>Dream Journal Bio</h4>
          <div>
            <button>
              <a href="https://dreamjournalbio.netlify.app/" target="_blank" rel="noopener noreferrer">
                Live Web Site
              </a>
            </button>
            <span> </span>
            <button>
              <a href="https://github.com/SharukhGV/simple-planner" target="_blank" rel="noopener noreferrer">
                Desktop App
              </a>
            </button>
            <div style={{paddingTop:"5px"}}></div>
            <button>
              <a href="https://github.com/SharukhGV/local-dream-storage-journal" target="_blank" rel="noopener noreferrer">
                Website Repo
              </a>
            </button>
          </div>
          <strong>Technologies Used</strong>
          <div>ElectronJS, LocalStorage</div>
          <div>🚧 Working on repo spruce up 🚧</div>

        </div>
      </div></div>
    )
  }
  
  export default DreamJournalBio
  