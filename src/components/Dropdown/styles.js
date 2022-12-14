import styled from 'styled-components'

export const DropdownMenu = styled.div`
    .dropdown-menu{
        width: 200px;
        position: absolute;
        top: 75px;
        list-style: none;
        text-align: start;
    }

    .dropdown-menu li{
        background: #bf1124;
        cursor: pointer;
    }

    .dropdown-menu li:hover{
        background: #bf1124;
    }

    .dropdown-menu .clicked{
        display: none;
    }

    .dropdown-link{
        display: block;
        height: 100%;
        width: 100%;
        text-decoration: none;
        color: #bf1124;
        padding: 15px;
    }

    @media screen and (max-width: 950px) {
        .fa-caret-down{
            display: block;
            color: red;
        }
    }
`