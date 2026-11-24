EpiVetWeb on Eläinlääkäriasema EpiVetin nettisivu ja ajanvarausjärjestelmä -projekti.

# EpiVet – värireferenssi

Tämä tiedosto sisältää EpiVetWebin aiemmissa versioissa käytetyt värit.

Kaikkia värejä ei tarvitse käyttää uudessa versiossa. Tarkoitus on säilyttää vanha väripaletti referenssinä ja helpottaa yhtenäisen visuaalisen ilmeen rakentamista.

---

## Pääasialliset tummat taustavärit
| Nimi | Hex | Käyttö |
|---|---|---|
| Background | #10120e | Päätausta myöhemmässä versiossa |
| Old Background | #14170f | Päätausta vanhemmassa versiossa |
| Deep Background | #0d100b | Erittäin tumma tausta / footer / header |
| Surface | #1f241c | Kortit, paneelit ja lomakekentät |
| Dark Green | #343d2a | Paneelit, hover-tilat ja osiot |

---

## Vihreä / oliivi -paletti
| Nimi | Hex |
|---|---|
| Green Dark | #343d2a |
| Green | #414834 |
| Olive | #676c4b |
| Sage | #a3ac85 |
| Sage Light | #c2c5aa |

Näitä käytettiin EpiVetin pääasiallisena vihreänä väriperheenä.

---

## Ruskea / maanläheinen paletti
| Nimi | Hex |
|---|---|
| Brown Dark | #572e0e |
| Brown | #7e4f23 |
| Brown Light | #926639 |
| Camel | #a68a64 |
| Sand | #b6ad90 |

---

## Neutraalit värit
| Nimi | Hex |
|---|---|
| White | #ffffff |
| Off White | #f5f3eb |
| Old Off White | #f4f2e9 |
| Dark Gray | #4c4c4c |
| Dark Gray Hover | #595959 |

---

# Ajanvarauksen palveluvärit
Ajanvarauskalenterissa eri palvelutyypeillä oli omat värinsä.

## Leikkaus
Normaali:
#40597a

Hover:
#4d6a91

---

## Vastaanotto
Normaali:
#46583f

Hover:
#53694a

---

## Hammashoito
Normaali:
#6e5436

Hover:
#806240

---

## Rokotus
Normaali:
#5c4b70

Hover:
#6a5681

---

## Laboratorio
Normaali:
#386766

Hover:
#427978

---

## Kontrolli
Normaali:
#5d603e

Hover:
#6c7047

---

## Muu
Normaali:
#4c4c4c

Hover:
#595959

---

# Varoitus- ja virhevärit
Näitä käytettiin esimerkiksi aukioloaikojen ulkopuolisiin ajanvarauksiin ja varoituksiin.

## Varoitusteksti
#e1aaa5

## Suljetun ajan teksti
#d09892

## Suljetun ajan tekstiväri
#bd827d

## Suljetun päivän tekstiväri
#d79a94

---

# Läpinäkyvät värit

## Tavallinen reunaviiva
rgba(194, 197, 170, 0.18)
Pohjautuu Sage Light -väriin.

---

## Voimakkaammat valkoiset reunat
rgba(255, 255, 255, 0.12)
rgba(255, 255, 255, 0.14)
rgba(255, 255, 255, 0.25)
rgba(255, 255, 255, 0.26)

---

## Valkoisen tekstin variaatiot
rgba(255, 255, 255, 0.84)

---

## Suljettujen aikojen ja varoitusten taustat
rgba(135, 47, 47, 0.08)
rgba(135, 47, 47, 0.15)
rgba(135, 47, 47, 0.17)
rgba(135, 47, 47, 0.22)
rgba(135, 47, 47, 0.25)

---

## Varoitusten reunat
rgba(190, 100, 100, 0.13)
rgba(190, 100, 100, 0.30)

---

## Menneet päivät
rgba(140, 140, 140, 0.10)

Tekstit:
rgba(245, 243, 235, 0.55)
rgba(194, 197, 170, 0.45)

---

## Tämän päivän korostus
rgba(103, 108, 75, 0.07)
rgba(103, 108, 75, 0.12)

---

## Tummat overlayt ja varjot
Header:
rgba(13, 16, 11, 0.97)

Modalin tausta:
rgba(5, 6, 4, 0.78)

Varjot:
rgba(0, 0, 0, 0.20)
rgba(0, 0, 0, 0.45)

---

# Alkuperäinen CSS-väripaletti

Vanhan sivuston alkuperäinen pääpaletti oli:

    :root {
        --bg: #14170f;
        --bg-deep: #0d100b;

        --green-dark: #343d2a;
        --green: #414834;
        --olive: #676c4b;

        --sage: #a3ac85;
        --sage-light: #c2c5aa;

        --brown-dark: #572e0e;
        --brown: #7e4f23;
        --brown-light: #926639;

        --camel: #a68a64;
        --sand: #b6ad90;

        --white: #ffffff;
        --off-white: #f4f2e9;

        --border: rgba(194, 197, 170, 0.18);
    }

Myöhemmässä versiossa käytettiin muun muassa:

    --bg: #10120e;
    --surface: #1f241c;

    --green-dark: #343d2a;
    --green: #414834;
    --olive: #676c4b;

    --sage: #a3ac85;
    --sage-light: #c2c5aa;

    --brown-dark: #572e0e;
    --brown: #7e4f23;
    --brown-light: #926639;

    --camel: #a68a64;
    --sand: #b6ad90;

    --white: #ffffff;
    --off-white: #f5f3eb;

---

# Nykyinen hyväksytty paletti

Tähän osioon voidaan myöhemmin siirtää vain ne värit, jotka päätetään säilyttää lopullisessa EpiVetWeb-versiossa.

Tavoitteena on, ettei lopullinen käyttöliittymä käytä tarpeettoman montaa lähes samanlaista väriä.

