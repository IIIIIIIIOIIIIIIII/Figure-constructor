function createFigure(){
	let figureProperties = {
		square: document.getElementById('square').checked,
		circle: document.getElementById('circle').checked,
		triangle: document.getElementById('triangle').checked,
		color: document.getElementById('color').value,
		width: document.getElementById('width').value + 'px',
		height: document.getElementById('height').value + 'px',
		borderRadius: Number(document.getElementById('width').value) / 2 + 'px'	
	}
	
	if(figureProperties.square){
		let newFigure = document.createElement('div');		
		newFigure.style.cssText = `width: ${figureProperties.width};
								   height: ${figureProperties.height}; 
								   background-color: ${figureProperties.color};
								   position: relative;
								   margin: 15px;`;		
		newFigure.value = 'created';	
		document.body.appendChild(newFigure);		
	}
	else if(figureProperties.circle){
		let newFigure = document.createElement('div');		
		newFigure.style.cssText = `width: ${figureProperties.width};
								   height: ${figureProperties.height};
								   border-radius: ${figureProperties.borderRadius};
								   background-color: ${figureProperties.color};
								   position: relative;
								   margin: 15px;`;		
		newFigure.value = 'created';		
		document.body.appendChild(newFigure);		
	}
	else if(figureProperties.triangle){
		let newFigure = document.createElement('div');		
		newFigure.style.cssText = `width: 0;
								   height: 0;
		                           border-bottom: ${parseInt(figureProperties.height)}px solid ${figureProperties.color};
								   border-left: ${parseInt(figureProperties.width) / 2}px solid transparent;
								   border-right: ${parseInt(figureProperties.width) / 2}px solid transparent;
								   margin: 15px;
								   display: block;`;		
		newFigure.value = 'created';		
		document.body.appendChild(newFigure);		
	}
}

function createRemoveButton(){
	const buttonRemove = document.createElement('input');
	buttonRemove.id = 'buttonClear';
	buttonRemove.type = 'button';
	buttonRemove.value = 'Очистить';
	document.body.appendChild(buttonRemove);
	document.getElementById('buttonClear').addEventListener('click', removeFigure);
}


function removeFigure(){
	let everyElement = document.querySelectorAll('*');
	for(let i = 0; i < everyElement.length; i++){
		if(everyElement[i].value == 'created'){
			document.body.removeChild(everyElement[i]);
		}
	}	
}

document.getElementById('buttonCreate').addEventListener('click', createFigure);
createRemoveButton();