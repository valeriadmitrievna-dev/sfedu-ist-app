import React from "react";
import styled, { keyframes } from "styled-components";

export default function FullScreenLoader() {
  return (
    <LoaderContainer>
      <LoaderBody>
        <LoaderSpiner />
      </LoaderBody>
    </LoaderContainer>
  );
}

const LoaderContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
	100% {
    transform: translateY(-20px);
  }
`;

const LoaderBody = styled.div`
  width: 100px;
  height: 80px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAExElEQVR4nO3cS2gddRTH8e+ZpppWa/DRpj5akTZaURDbaBXaSkRss1AL3YiooAtfSFXcKIgLwSq4kIKPquBO6kKrItgarEJaC8YWIa2SRqmgtQr1kaZqTWzzczH3xtvk3tzkzsz932bOZ5UMM///mTmZ1/9/JuCcc84555xzzjnnnHPOOedcHVnoANIkaQ5wDXAdcCVwHnAucE5hlb+Ao8ABoA/YC3Sb2e/1j3aakjRX0npJX0g6rqk7IWmPpCckXRR6f05ZkpZJek/ScA1JmCg5H0haHnr/ThmS2iS9LWkkxUSUs1XSZaH3t2FJiiQ9qXTPiGr+kfSMpJmh97+hSGqVtK2OiRirR9IloY9DQ5DULulwwGQUHZZ0bejjEZSkFZKOBE5EqT8l3ZzlPjfse4ikDuBD4IzQsYxxDFhtZjuyaLwhEyJpEfAlcHboWCoYAFaY2ddpN9xwCZE0C9gJLA0dSxXfAu1mNphmo1GajaXkNRo/GQBtwEtpN5rpGSKpDWgHWoF5wBDwG9AL7Dazv8es3wF8mmVMGVhjZh+HDqIiSfMkPSdpf5UnliFJ70rqLGzXJKk3q8ejDPVLOj30cR9HUrOkDYofDaeqW9KLaR6lOnswreOYyiVL0gLgHSCvL04/AG1mNpy0ocQ3dUlXAF+R32QALATWptFQooRIugD4iHgSKO/uSqORmi9ZkiLgc+LZOQfHgfPN7NckjSQ5Q+7Fk1GqCbgxaSM1JURSM7AhaefTUJiEALcCc5N2Pg0lnvqtNSF3J+14mrpUUqJXiSlvXOhwADgrScfT2EIz+7HWjWs5Qy7EkzGRRK8AU0qI4jGbe5J0mAOJ/libJrOS4orA9cDDwPwkHebArCQbV02I4jnk14GLk3SUI7cU7rM9tZSoVrypS5oBbAQemmg9V9EI0AO8AWw2s2OT2ajsgZY0G9hM/L7hkvsDeAV4tlpixiVE0mlAF3BDNrHl2nfAfWb2WaUVyj1lvYwnIyuLge2Snq60wklniKQHgFezjsoB8f35MTNT6cLRhEiaD+zHX/rqaaOZPVq6oPSS9QKejHp7RNIdpQsMQNIS4Bv88TaEI8BSMzsA/58h9+PJCKUFeL74ixUmmw7RuHW0eTACXGVm+yLiaVhPRlgR8FTxh1VhY3EFt0maHQHXh47EAdAMdETAgtCRuFGdEV6s0EiuNknDgH/22xh+iYB/Q0fhRrVExG+KrjHMjIDvQ0fhRh2NiMewXGM4FAHdoaNwo/oi4BPisRQX3q7IzH4GtoeOxAHQVRx+3xQ0DAfQWxztBXgfv7mHtglOnlNfA2wNFk6+HQQWm9nQ6Jy6mW0jLo5z9fe4mQ3B+DKgFmAPsChEVDm1xczWFX8pV7m4BNhB/D9vXbb6geVmNlBcMK5y0cz6gE4g0ee9rqqfiP9xzUDpwrIf7JjZbmAlcS2qS18/sNLMxo0jVvyCqnCmLAPeyjCwPNpCfJkqO6g74SdtZjZoZncCq4F9GQSXJweB281s3djLVKlJF8cVvgpaS1xUdxMwI3GI+bCXuID9zeKj7URqqlaU1EqclFXA5cRl9nOAM2tpb5o4AQwSFx32AbuALjPzK4tzzjnnnHPOOeecc84555xzzjmXgv8Ahm0L8j+0LnMAAAAASUVORK5CYII=");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${bounce} 1s linear infinite alternate;
`;

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoaderSpiner = styled.span`
  width: 25px;
  height: 25px;
  border: 4px solid;
  border-color: rgb(${props => props.theme.mainColorMedium}) transparent;
  border-radius: 50%;
  display: inline-block;
  animation: ${rotation} 1s linear infinite;
  margin-top: 5px;
  margin-left: 1px;
`;
