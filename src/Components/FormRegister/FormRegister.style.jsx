import styled from 'styled-components';


export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(207, 206, 206, 0.5); 
    padding: 20px;        
    max-width: 650px;  
    height: auto;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    justify-content: center;
    align-items: center;
    margin: 250px 0 0 600px ;
    @media (max-width: 768px) {
        width: 90%;  
    }
    
`;


export const InputField = styled.input`
    width: 300px;
    height: 30px;
    margin: 10px;
    padding: 0;       
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    transition: box-shadow 0.3s ease;

    &:focus {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); 
        outline: none; 
    }
`;

export const  Select = styled.select
`
width: 300px;
height: 30px;
margin: 10px;
border-radius: 20px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
transition: box-shadow 0.3s ease;
border: 1px solid #ccc;
&:focus {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); 
    outline: none; 
}

`;

export const Button = styled.button`
    width: 200px;
    height: 30px;
    background: #2A0800;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer ;
    
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
        background-color: #775144;
        transform: translateY(5px);  
    }
`;

export  const  Div = styled.div
    `display: flex;
    flex-direction: column;

`;


export  const  Div2 = styled.div`
    display: flex;
    flex-direction: column;

`;

export  const  Div3 = styled.div`
    display: flex;
    flex-direction: column;

`;
export  const  Div4 = styled.div`
    display: flex;
    flex-direction: column;

`;
export  const  Div5 = styled.div`
    display: flex;
    flex-direction: column;

`;
export  const  Div6 = styled.div`
    display: flex;
    flex-direction: column;

`;
export  const  Div7 = styled.div`
    display: flex;
    flex-direction: column;

`;

