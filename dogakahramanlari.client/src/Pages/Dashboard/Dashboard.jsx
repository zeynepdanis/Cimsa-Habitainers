import { Animals } from "../../assets/svg/icons"
import { DashboardWrapper } from "./Dashboard.style"

const Dashboard = () => {
  return (
    <DashboardWrapper>
        <div className="dashboard">
            <div className="dashboard-container">
                <p>
                Hoş Geldiniz! 
                <br />
                Hayvanları Kurtarın!
                Ormanda yaşayan dostlarımız, bir gün ormanlarını
                tehdit eden büyük bir sorunla karşılaştılar. İşte tam da bu noktada, cesur çocuklar ortaya çıktı ve hayvanların yardımına koştu.
                Şimdi siz de bir kahraman olabilirsiniz! Biz, hayvanları korumanın ve onlara sevgiyle yardım etmenin önemini anlatan bir web sitesiyiz. Haydi, birlikte hayvanların kurtuluşu için adım atalım!
                </p>
                <div className="animal-container">
                    <Animals />
                </div>
            </div>
            <div className="button-container">
                <button className="dashboard-button">
                    Görevler
                </button>
                <button className="dashboard-button">
                    Hayvanlar
                </button>
                <button className="dashboard-button">
                    Orman
                </button>
            </div>
        </div>
    </DashboardWrapper>
  )
}

export default Dashboard