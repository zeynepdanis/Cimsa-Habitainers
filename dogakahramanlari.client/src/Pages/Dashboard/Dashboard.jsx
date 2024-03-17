import { useNavigate } from "react-router-dom";
import { AnimalIcon, HomeIcon } from "../../assets/svg/icons"
import { DashboardWrapper } from "./Dashboard.style"

const Dashboard = () => {
  const navigate = useNavigate();  

  return (
    <DashboardWrapper>
        <div className="dashboard">
            <div className="dashboard-header">
                    {/* <div><HomeIcon /></div> */}
                    <h1>DOĞA KAHRAMANLARI</h1>
            </div>
            <div className="dashboard-container">
                <p>
                Hoş Geldiniz! 
                <br />
                Hayvanları Kurtarın!
                Ormanda yaşayan dostlarımız, bir gün ormanlarını
                tehdit eden büyük bir sorunla karşılaştılar. Çevre kirliliği onları evlerinden ayırıyor. Bu şekilde giderse nesilleri tükenecek. 
                İşte tam da bu noktada, siz cesur çocuklar ortaya çıktınız ve hayvanların yardımına koştunuz.
                Şimdi siz de bir kahraman olabilirsiniz! 
                 Haydi, birlikte hayvanların kurtuluşu için adım atalım!
                 Onların evlerini, doğamızı koruyalım!
                 <div className="animal-container">
                    <AnimalIcon />
                </div>
                </p>
            </div>
            <div className="button-container">
                <button 
                    onClick={() => navigate('/tasks')}
                    className="dashboard-button"
                >
                    Görevler
                </button>
                <button
                    onClick={() => navigate('/cages')}
                    className="dashboard-button"
                >
                    Hayvanlar
                </button>
                <button 
                    onClick={() => navigate('/forest')}
                    className="dashboard-button"
                >
                    Orman
                </button>
            </div>
        </div>
    </DashboardWrapper>
  )
}

export default Dashboard