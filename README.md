# Introducere

Cercetarile arata ca numai organizatiile care detin tehnologie avansata pot avea procese de planificare financiara pe deplin integrate, 
care sunt flexibile la schimbarile structurii afacerii si le pot transforma in obiective realiste. 
Tehnologia poate produce efectul de network și analiza numărului mare de date pe care o afacere trebuie să îl genereze 
și din analiza cărora poate rezulta valoare in multe forme. 
Din acest motiv, accesul la informații trebuie să fie ușor și rapid pentru a putea lua decizii corecte și bazate pe date concrete.
Cloud Computing fiind un ansamblu distribuit de servicii de calcul, aplicații, acces la informații și stocare de date,
fără ca utilizatorul să aibă nevoie să cunoască amplasarea 
și configurația fizică a sistemelor care furnizează aceste servicii, ajunge sa fie solutia cea mai sustenabila pentru viitorul firmelor.
 
Tehnologia poate produce efectul de network și analiza numărului mare de date pe care o afacere trebuie să îl genereze 
și din analiza cărora poate rezulta valoare in multe forme. 
Din acest motiv, accesul la informații trebuie să fie ușor și rapid pentru a putea lua decizii corecte și bazate pe date concrete. 
În susținera acestei idei, apare nevoia angajatorului de a digitaliza documentele și a extrage informații esențiale 
și de a le introduce in baza de date pentru a fi mai târziu analizate și interpretate. 
Desigur, în zilele noastre accesul la date nu mai reprezintă o problemă, însă timpul pe care îl pierdem printre ele, da. 
De accea, o soluție este folosirea tehnogiei OCR pentru a introduce rapid date, precum informațiile personale ale unui client 
sau angajat de pe cartea de identitate, 
fara a le insera de mână.

# Descrierea problemei 

Fiind o firma de IT, operatorii nostrii au nevoie de resursele lor hardware (laptop, periferice si alte dispozitive necesare). 
Avand datele personale acestora sub forma de imagini (buletin, pasaport) si pentru a nu ne pune operatorii la o munca inimaginabila 
si mancatoare de timp, developerii nostrii au venit cu o soultie in intampinarea acestora. De asemenea, avand adresa, o putem configura usor
folosind Google Maps si astfel operatorii sunt pregatiti de transmiterea pachetelor avand toate datele necesarela dispozitie.

Recunoașterea Optică a Caracterelor (Optical character recognition), abreviată și OCR, 
reprezintă translatarea mecanică sau electronică a imaginilor cu scris de mână, tipărit sau printat (de obicei scanat) în text editabil. 
Folosită ca formă de introducere a datelor din înregistrări de date tipărite pe hârtie, 
indiferent dacă sunt documente de pașaport, facturi, extrase bancare, chitanțe, cărți de vizită, tipărituri de date statice, etc. 
Este o metodă de digitalizare a glifelor astfel încât să poată fi editate electronic, căutate, stocate, afișate on-line 
și utilizate în calculul cognitiv,
traducerea automată, extras text-în-vorbire, date cheie, extragerea textului din imagini.


# Descrierea API
## OCR API

API-ul OCR oferă un mod simplu de a analiza imagini și documente PDF cu mai multe pagini (PDF OCR) și 
de a obține rezultatele textului extras într-un format JSON. API-ul poate fi folosit de pe orice dispozitiv conectat la internet 
(desktop, mobil, iPhone, Android, telefon Windows, frigider ...). 

### Post Parameters

```
 __apikey__: API Key (send in the header),
 __base64Image__: base64Image: Image as Base64 encoded string,
 __scale__: true, the api does some internal upscaling. 
 __OCREngine__: 2, OCR Engine 2 is a new image-processing method.
 __detectOrientation__: true, the api autorotates the image correctly and sets the TextOrientation parameter in the JSON response
```

### Response

API-ul returnează rezultatele în format JSON. 
Rezultatul conține de obicei ExitCode, detalii despre eroare 
(dacă au apărut) și o mulțime de rezultate analizate pentru paginile Image / PDF. 

```
OCRExitCode: INTEGER 
1: Parsed Successfully (Image / All pages parsed successfully)
2: Parsed Partially (Only few pages out of all the pages parsed successfully)
3: Image / All the PDF pages failed parsing (This happens mainly because the OCR engine fails to parse an image)
4: Error occurred when attempting to parse (This happens when a fatal error occurs during parsing )

IsErroredOnProcessing: BOOLEAN
If an error occurs when parsing the Image

ErrorDetails: TEXT
Detailed error message

FileParseExitCode: INTEGER
The exit code returned by the parsing engine
 0: File not found
 1: Success
-10: OCR Engine Parse Error
-20: Timeout
-30: Validation Error
-99: Unknown Error
```

## GOOGLE MAPS API
API-ul Maps JavaScript vă permite să personalizați hărți cu propriul
conținut și imagini pentru afișare pe pagini web și dispozitive mobile. 
API JavaScript JavaScript include patru tipuri de hărți de bază (foaie de parcurs, satelit, hibrid și teren) 
pe care le puteți modifica utilizând straturi și stiluri, 
controale și evenimente și diverse servicii și biblioteci.

````
The Maps JavaScript API is loaded using a script tag, which can be added inline in 
your HTML file or dynamically using a separate JavaScript file.

 <script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyA_SCgCYYPVMzAUfftimyDpiUyibUxVXLU&callback=initMap" async defer></script>


__src__:URL where the Maps JavaScript API is loaded from
__async__:Asks the browser to render the rest of your website while the Maps JavaScript API loads. 
          When the API is ready, it will call the function specified using the callback parameter
__defer__: Asks the browser to parse the HTML document first before loading the script

````

# Flux de Date


Primul lucru de care ne lovim cand deschidem aplicatia sunt cele doua butoane
de Uploud si Evaluate.

1.Upload file
Uploud iti permite search-ul printre fisierele din calculator pentru a
inregistra Cartea de Identitatea a persoanei dorite.


### Request/Response
2.Evaluate file
Apeleaza OCR API (POST method) si ne intoarce sub forma de JSON, datele din imagine.
![UploudImg](imgs/server.png)

```JSON
{
      "ParsedResults":[
      {"TextOverlay":{"Lines":[],
      "HasOverlay":true,"Message":"Total lines: 0"},
      "TextOrientation":"0","FileParseExitCode":1,
      "ParsedText":"ROUMANIE JRONLANIA ROMANIA\nCARTE DE IDENTITATE\n
                    SERIA seria NR nr\n
                    CARTE\nIDENTITY\nCARD\nD'IDENTITE\nCNP cnp\n
                    Nume/Nom/Last name\nPITIGOI\n\nPrenume/Prenom/First name\nBEATRICE-LILIANA\nCetatenie/Nationalite/Nationality\nRomână/ ROU\n
                    Loc naştere/Lieu de naissance/Place of birth\n
                    Mun.BucureştiSec.o\nDomiciliu/Adresse/AddresS\n
                    Mun.Bucureşti Sec.6\nSex/Sexe/Sex\nF\n
                    Str.Sibiu si restul adresei ...\n847 B\n
                    IDROUPITIG0I<<BEATRICE<LILIANA<<<<<<\n
                    alteDateConfidentiale\n
                    Emisd delDelivree par/lssued by\nS.P.C.E.P. Sector o
                    \nValabilitate/Validite/Validity\n03.06.15-23.05.2022",
                    "ErrorMessage":"","ErrorDetails":""}],
                    "OCRExitCode":1,
      "IsErroredOnProcessing":false,
      "ProcessingTimeInMilliseconds":"23433",
      "SearchablePDFURL":""
      }

```

3.Se parseaza JSON-ul si se afiseaza textul extras. 
In cazul nostru, numele si adresa.
![UploudImg2](imgs/datePers.png)

4.Curierul poate cauta adresa in bara de search de mai jos.
![UploudImg2](imgs/adresa.png)


# Referinte

 * https://ocr.space/
 * https://cloud.google.com/maps-platform


