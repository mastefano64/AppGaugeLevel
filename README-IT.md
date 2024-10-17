## AppGaugeLevel

### Introduction

[LIVE DEMO](https://www.stefanomarchisio.it/AppGaugeLevel/index.html)<br>

Il presente controllo fornisce una progressbar / indicatore di livello. E' possibile impostare 4 modalità di funzionamento: 'horizontal-linear', 'horizontal-step', 'vertical-linear', 'vertical-step'. Barra orizzontale lineare o a step. Barra verticale lineare o a step. Posso stabilire un range di valori in input (es. 0-150, 50-200) tramite le proprietà 'minValue' e 'maxValue'. La barra visualizzata nelle 4 modalità avrà sempre una scala che va da 1 a 100 (percentuale). Di default verranno visualizzati 10 step, ma posso anche impostare un numero di step arbitrario tramite la proprietà 'numberStep'.

<br>

Si possono stabilire 2 soglie di 'allerta' opzionali, in questo modo al raggiungimento della soglia, l'indicatore di progresso cambierà colore. Se non vengono specificate soglie l'indicatore di progresso avrà sempre il colore di default. Se è stata scelta una barra a step, è anche possibile impostare il colore di backgroung degli step, con il colore corrispondente alle 3 aree delimitate dalle soglie di 'allerta'. Al raggiungimento il colore di backgroung passerà da opaco a pieno.

<br>

![AppGaugeLevel](/screenshot/image1.png)

![AppGaugeLevel](/screenshot/image2.png)

### GaugeLevelOptions

**gaugeType**: Tipo progressbar / indicatore di livello. (*'horizontal-linear', 'horizontal-step', 'vertical-linear', 'vertical-step'*).

**minValue**: Valore minimo in input (*number - required*).

**maxValue**: Valore massimo in input (*number - required*).

**heightHorizontal**: Altezza barra orizzontale lineare (*string - default '50px'*).

**heightStepHorizontal**: Altezza step barra verticale (*string - default '50px'*).

**widthStepVertical**: Larghezza step barra verticale (*string - default '100%'*).

**numberStep**: In modalità step, numero di step visualizzati (*number - default 10*).

**showProgressText**: Indicazione di progresso percentuale in testo. (*boolean - default: true*).

**showLinearProgressAlert**: Indicazione di progresso con alert in modalità lineare (si possono stabilire 2 soglie di 'allerta' opzionali, in questo modo al raggiungimento della soglia, l'indicatore di progresso cambierà colore). (*boolean - default: false*).

**showStepProgressAlert**: Indicazione di progresso con alert in modalità step (Si possono stabilire 2 soglie di 'allerta' opzionali, in questo modo al raggiungimento della soglia, l'indicatore di progresso cambierà colore). (*boolean - default: false*).

**showAlertLevelOnStep**: In modalità step viene mostrato il colore corrispondente alla soglia in background. (*boolean - default: false*).

**showAlertLevelPercOnStep**: In modalità step viene mostrata la percentuale di progresso corrispondente (sullo step). (*boolean - default: false*).

**thresholdStep**: Specifica se 'l'indicatore di avanzamento' cambia colore quando entra nel range o quando esce.  (*'after', 'before' - default: 'before'*).

**alertLevelLinearOrange**: Specifica il valore della percentuale di progresso orange - soglia. (si possono stabilire 2 soglie di 'allerta' opzionali, in questo modo al raggiungimento della soglia, l'indicatore di progresso cambierà colore.). (*number - default: 40*).

**alertLevelLinearRed**: Specifica il valore della percentuale di progresso red - soglia. (si possono stabilire 2 soglie di 'allerta' opzionali, in questo modo al raggiungimento della soglia, l'indicatore di progresso cambierà colore). (*number - default: 20*).

**alertLevelStepOrange**: Specifica il numero dello step orange - soglia. (si possono stabilire 2 soglie di 'allerta' opzionali, in questo modo al raggiungimento della soglia, l'indicatore di progresso cambierà colore). (*number - default: 4*).

**alertLevelStepRed**: Specifica il numero dello step red - soglia. (si possono stabilire 2 soglie di 'allerta' opzionali, in questo modo al raggiungimento della soglia, l'indicatore di progresso cambierà colore.). (*number - default: 2*).

**alphaColor**: Se è stata scelta una barra a step, è anche possibile impostare il colore di backgroung dello step, con il colore corrispondente alle 3 aree delimitate dalle soglie di 'allerta'. Al raggiungimento il colore di backgroung passerà da opaco a pieno. La proprietà alphaColor definisce alpha color dello stato opaco. (*string - default: '1A'*).

**defaultLevelColor**: Colore di default/foreground della barra di progresso. (*string - default: '#00ffff'*).

**defaultBackgroundLevelColor**: Colore di default/background della barra di progresso. (*string - default: '#00ffff'*).

**alertLevelGreenColor**: Colore green alert. (*string - default: '#008000'*).

**alertLevelOrangeColor**: Colore orange alert. (*string - default: '#ffa500'*).

**alertLevelRedColor**: Colore red alert. (*string - default: '#ff0000'*).

**tooltipDisabled**: Disabilita tooltip in modalità step. (*boolean - default: true*).

**classHorizontalProgressText**: Classe css.

**classVerticalProgressText**: Classe css.

