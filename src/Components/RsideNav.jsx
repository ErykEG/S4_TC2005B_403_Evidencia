import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./Styles/RsideNav.css"
import { useNavigate } from 'react-router-dom';

function RsideNav() {
    const navigate = useNavigate();
    return (
        <SideNav
            onSelect={(selected) => {
                console.log(selected);
                navigate('/'+selected);
            }}
            className="rsidenav"
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="profile">
                    <NavIcon>
                        <i className="fa fa-fw fa-user" style={{ fontSize: '1.25em' }} />
                    </NavIcon>
                    <NavText>
                        Profile
                    </NavText>
                </NavItem>
                <NavItem eventKey="proyects">
                    <NavIcon>
                        <i className="fa fa-fw fa-folder" style={{ fontSize: '1.25em' }} />
                    </NavIcon>
                    <NavText>
                        Proyects
                    </NavText>
                </NavItem>
                <NavItem eventKey="candidates">
                    <NavIcon>
                        <i className="fa fa-fw fa-id-card" style={{ fontSize: '1.25em' }} />
                    </NavIcon>
                    <NavText>
                        Candidates
                    </NavText>
                </NavItem>
                <NavItem eventKey="settings">
                    <NavIcon>
                        <i className="fa fa-fw fa-gear" style={{ fontSize: '1.25em' }} />
                    </NavIcon>
                    <NavText>
                        Settings
                    </NavText>
                </NavItem>
                {/* <NavItem eventKey="charts">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Charts
                    </NavText>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                            Line Chart
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Bar Chart
                        </NavText>
                    </NavItem>
                </NavItem> */}
            </SideNav.Nav>
        </SideNav>
    );
}
export default RsideNav;