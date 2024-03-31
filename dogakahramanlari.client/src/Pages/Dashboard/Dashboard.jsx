import { useNavigate } from "react-router-dom";
import { AnimalIcon } from "../../assets/svg/icons";
import { DashboardWrapper } from "./Dashboard.style";

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <DashboardWrapper>
            <div className="dashboard">
                <div className="dashboard-header">
                    <h1 className="white">DOĞA KAHRAMANLARI</h1>
                    <h1>DOĞA KAHRAMANLARI</h1>
                </div>
                <div className="dashboard-container">
                    <p><p> <b>
                        MERHABA DOĞA KAHRAMANLARI,
                    </b>
                    </p>

                        <div className="yazı">
                            Ormanda yaşayan sevimli hayvan dostlarımızı kilitli kaldıkları kafeslerinden kurtarmak için siz doğa kahramanlarına ihtiyacımız var.

                            Hayvanları kurtarmak için <b>Görevler Sayfası</b>’ ndaki görevleri tamamlayarak anahtar kazanabilir, kazandığınız anahtarla birlikte <b>Hayvanlar Sayfası</b>' ndaki hayvanları kilitli oldukları kafeslerinden kurtarabilirsiniz.

                            <br />
                            <br />
                            Siz de bu hayvanları kurtarıp doğa kahramanı olmak istiyorsanız  Haydi, birlikte hayvanların kurtuluşu için adım atalım!
                            Onların evlerini, doğamızı koruyalım!
                        </div>
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