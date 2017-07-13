
		var strengthVal = 0;
		var intelVal = 0;
		var fortuneVal = 0;
		var strengthBonus = 0;
		var intelBonus = 0;
		var fortuneBonus = 0;
		var strengthTot = 0;		
		var intelTot = intelVal + intelBonus;
		var fortuneTot = fortuneVal + fortuneBonus; 
		var pointsStart = 6;
		var username = sessionStorage.getItem('username');
	 	var currentScenario = '';
	 	var scenarioCount = 0;
		var brute = 0;
		var charm = 0;
		var arcane = 0;
		var jerk =0;

		var randomName = function(){
			return name1[Math.floor((Math.random() * name1.length) + 0)] +" "+ name2[Math.floor((Math.random() * name2.length) + 0)];
			return ;
			}
		var HP = 0;
		var MP = 0;
		var typeClass = '';

		//List of items that can be equipped

		var name1 = ['Bananas','Norin','Jilly','Pines','Ayesha','Tanaka']
		var name2 = ['Grisban','Aywale','Shamrock', 'McKraken' , 'the Bold' , 'McGyver' ]

 		var items = [{
		 			name: 'KISS T-Shirt',
		 			desc: 'Totally radical.  Increase HP +13, MP+6',
		 			on: false,
		 			effect:  function(){HP = HP +13; MP=MP+6;} 
		 		},{
		 			name: 'Steel Katana',
		 			desc: 'Increase Strength by +5',
		 			effect:  function(){strengthBonus = strengthBonus +5;}
		 		},{
		 			name: 'Lucky Toad Shield',
		 			desc: 'Made from thick toad hide.  Increase HP +5, Fortune +5',
		 			on: false,
		 			effect: function(){HP = HP+5; fortuneBonus = fortuneBonus+5;}

		 		}, {
					name: 'Piles of Books',
					desc: 'You might be a bookworm, but you can hurt enemies with papercuts. Strength +3, Intelligence + 3',
					on: false,
					effect: function(){strengthBonus = strengthBonus +3; intelBonus = intelBonus +3;}
				}, {
					name: '1967 Silver Dollar',
					desc: 'Hopefully this will make you luckier than JFK.  Fortune +5',
					on: false,
					effect: function(){fortuneBonus = fortuneBonus +5}
				}, {
					name: 'Mug of Infinite Coffee',
					desc: 'Always hot and ready.  HP +20, Intelligence +5',
					on: false,
					effect: function(){HP = HP+20; intelBonus=intelBonus+5;}
				}, {
					name: 'Manual of a Certain Set of Skills',
					desc: 'The ability to find people and hurt them.  <br>Strength + 5, Intellgence +1',
					on: false,
					effect:  function(){strengthBonus = strengthBonus +5; intelBonus= intelBonus+1; }
				}, {
					name: 'Basic Javascript Knowledge',
					desc: 'Plus 10 everything',
					on: false,
					effect: function(){strengthBonus = strengthBonus + 10; fortuneBonus = fortuneBonus +10; intelBonus = intelBonus +10; HP = HP + 10; MP = MP+10}
				}	 				
 		] 


 		var scenarios = [{
 					name: 'You encounter a band of crazed cultists',
 					desc: 'Dressed in robes, a group of hooded cultists are performing a ritual, hoping for the resurrection of their dark lord.',
 					choice1: 'Fight them all!  Brute force solves all problems! ',
 					choice2: 'Steal one of their robes and try to sneak past',
 					choice3: 'Usurp the ceremony and try to become their leader',
 					effect: ['',
 							 function(){ if (strengthTot > 7) {
 							 				$('.outcomeText').html('While they fought with fervor and devotion, they had no chance against your strength and martial ability.  One by one they fall to your superior skills.  There will be no resurection tonight.');
 							 				$('.outcomeTitle').html('You have defeated all your enemies!');  
 							 				brute=brute+1;
 							 			} 
 							 			else if (typeClass == 'Mage' && MP > 9){
 							 				MP = MP -10;
 							 				$('.outcomeText').text('You realize that the cultists are trying to summon the demon Gene Simmons, and you decide to stop them because you owe Gene Simmons money.  You unleash a torrent of fireballs that torches the cultists and disrupts the summoning ritual')
 							 				$('.outcomeTitle').text('You have defeated all your enemies!  Used 10 MP') 	;
 							 				arcane=arcane+1;						 				
 							 			}
 							 			else {
 							 				HP= HP-5; 
 							 				$('.outcomeText').html('A struggle ensues, and their numbers almost overwhelm you.  You should have spent more time working out instead of on the internet.  Luckily, these cultists are not super fit either, and you are able to outlast them.' )
 							 				$('.outcomeTitle').html('Victory did not come without cost. Lose 5 HP')	;
 							 				charm++;

 							 			}
 							 },
 							 function(){ if (fortuneTot > 8 ) {
 							 			$('.outcomeText').text('After luring a single member and knocking him unconscious, you don a robe and awkwardly chant with them.  You politely decline their invitation for beers at Andy\'s afterwards.'); 
 							 			$('.outcomeTitle').text('You were able to sneak past undetected!');
 							 			charm=charm+1;
 							 			}
 							 			else if (typeClass == 'Mage' && MP > 4) {
 							 				MP = MP -5;
 							 				$('.outcomeText').html('Since you are a mage, you alredy have a robe.  And magic!  pfft.  You cast a concealment spell and become invisible.')
 							 				$('.outcomeTitle').html('You were able to sneak past undetected!  Used 5 MP')
 							 				arcane=arcane+1;
 							 			}
 							 			else {HP= HP-8;
 							 				$('.outcomeText').html('While trying to sneak past, a cult member points at you to lead the prayer to the song.  Citing your asthma and wheezing cough, you decline.  This prompts Andy the cultist to offer you some cough drops, and he accidentally unmasks you in front of everyone.  A struggle ensures, and you barely escape with your life.' )
 							 				$('.outcomeTitle').html('You were reckless. Lose 8 HP')	
 							 			}
 							 },
 							 function(){ if (items[0].on == true) {
 							 			$('.outcomeText').text('The cultists see the visage of the dark lord, Gene Simmons, on your shirt.  You are seen as an avatar and they bow to your will.')
 							 			$('.outcomeTitle').text('You are now the cult leader. All hail your will!')	
 							 			charm = charm +1;arcane=arcane+1;
 							 			}
 							 			else {HP= HP-8; 
 							 				$('.outcomeText').text('While slightly intrigued, the cultists are too devoted to their dark lords to entertain your idea.');	
 							 				$('.outcomeTitle').text('You were reckless. Lose 8 HP')	
 							 			}
 							 },
 							]
 				},{
 					name: 'You encounter a messenger seeking aid',
 					desc: 'Ernesto, loyal courrier to the Duke of Colonwall, injured himself when he accidentally fell off his horse. He needs your help to deliver a package to the Duke\'s nephew, in return for treasure.  The road will be littered with bandits, so tread carefully! ',
 					choice1: 'Honorably accept Ernesto\'s request and attempt to deliver the package.',
 					choice2: 'Rob Ernesto and take the package for yourself.',
 					choice3: 'Kidnap the Duke\'s nephew for ransom.',
 					effect: ['',
 							 function(){ if (fortuneTot > 6 && intelTot >5) {
 							 				$('.outcomeText').text('You know the way around the path and avoid ambushing bandits because you used to be one of them.  A few men spot you, but are not able to catch up.');
 							 				$('.outcomeTitle').text('You deliver the package successfully!');  
 							 				charm=charm+1;
 							 			}
 							 			else if (typeClass == 'Mage' && MP > 9) {
 							 				MP = MP-10;
 							 				$('.outcomeText').text('You think to yourself, "sweet, easy money!" and use a teleportation spell to deliver the package.');
 							 				$('.outcomeTitle').text('You deliver the package successfully! Used 10 MP');   	
 							 				arcane=arcane+1;						 				
 							 			} 
 							 			else if (strengthTot > 8) {
 							 				 
 							 				$('.outcomeText').text('Soon after entering the road, you are immediately ambushed.  Luckily, you are a super badass and beat the crap out of your foes, without taking injury.');
 							 				$('.outcomeTitle').text('You deliver the package successfully!');  
 							 				brute= brute+1;
 							 			} 							 				
 							 			else {
 							 				HP = HP - 7;
 							 				$('.outcomeText').text('Soon after entering the road, you are immediately ambushed.  Luckily, you are a super badass and beat the crap out of your foes, but only after taking some injuries.');
 							 				$('.outcomeTitle').html('You deliver the package successfully!  <br><br> Lost 7 HP');  
 							 				brute=brute+1;;
 							 			}
 
 							 },
 							 function(){
 							 			if (typeClass == 'Mage' && MP > 6) {
 							 				MP = MP -5;
 							 				$('.outcomeText').text('Using a mind-control spell, you trick Ernesto into believing that you ARE the nephew, and convince him to give the box to you.  You store the package in your mage-bag and go on your way.');
 							 				$('.outcomeTitle').text('Successfully robbed the messenger! Cost 5 MP');  
 							 				arcane=arcane+1;jerk = jerk+1;
 							 			} 

 							 			else { HP = HP - 8;
 							 				$('.outcomeText').text('You open the box, and there is a super-rare brandy inside.  You decide to celebrate by pouring yourself a glass.  After taking a big gulp, you violently spit it out and start convulsing.  Was the Duke trying to poison his newphew?  Probably.');
 							 				$('.outcomeTitle').text('You are poisoned and lose 8 HP!');
 							 				jerk = jerk+1;   	
 							 				}
 							 },
 							 
 							 function(){    	 							 			
 							 			if (fortuneTot > 4){
 							 				$('.outcomeText').text('Posing as the courrier, you are able to kidnap the Duke\'s nephew.  At first, the Duke had no intention of negotiating a ransom. But luckily another relative was willing to pay.');
 							 				$('.outcomeTitle').html('Kidnap success!   <br><br> You are an a-hole.');  
 							 				jerk = jerk +1;
 							 			}
 							 			else {
 							 				HP = HP -3;
 							 				$('.outcomeText').html('You meet with the Duke\'s nephew and trick him into riding with you "to go see his uncle."  Instead, you shackle him and notify the Duke of your ransom demands.  <br><br> Unfortunately for you, the Duke has no interest paying this ransom, and was actually trying to poison the boy.' );
 							 				$('.outcomeTitle').html('The Duke does not bargain and your efforts are futile.');   
 							 				charm=charm+1;	 							
 							 			}
 							 }
 							] 					
 				},{
  					name: 'A pale rider beckons',
 					desc: 'At dusk\'s hour, you are approached by a man on a horse.  He holds two dice in his hand, one white and one black. <br><br> \"Which dice will roll higher? he asks?\" ',
 					choice1: 'The black dice.',
 					choice2: 'The white dice.',
 					choice3: '$%# this guy up and take both his dice.',
 					effect: ['',
 							 function(){ 
 							 			var whiteDice =  Math.floor((Math.random() * 6) + 1); 
 							 			var blackDice = Math.floor((Math.random() * 6) + 1); 
 
 							 			 

 							 			if (whiteDice < blackDice ) {
 							 				$('.outcomeText').html(`The black dice rolled a ${blackDice}, and the white dice rolled a ${whiteDice}. The pale rider looks amused and slowly rides away.`)
 							 				$('.outcomeTitle').html('Better lucky than dead!');  
 							 				}
 							 			else if (fortuneTot > 7) {
 							 				$('.outcomeText').html('Death rolls both dice, and they both come up as 3.  Annoyed, the pale rider walks on and leaves you be.')
 							 				$('.outcomeTitle').html('Better lucky than dead!'); 
 							 				}
 							 			else {
 							 				$('.outcomeText').html(`The black dice rolled a ${blackDice}, and the white dice rolled a ${whiteDice}. `)
 							 				$('.outcomeTitle').html('You lost a gamble for your life.  Lose half HP');
 							 				brute=brute+1;
 							 				HP = HP/2  
 							 				}
 							 			
 
 							 },
 							 function(){
 							 			var whiteDice =  Math.floor((Math.random() * 6) + 1);  
 							 			var blackDice =  Math.floor((Math.random() * 6) + 1);  
 							 			 
 							 			if (whiteDice > blackDice || fortuneTot >6) {
 							 				$('.outcomeText').html(`The black dice rolled a ${blackDice}, and the white dice rolled a ${whiteDice}. The pale rider looks amused and slowly rides away.`)
 							 				$('.outcomeTitle').html('Better lucky than dead!');  
 							 				}
 							 			else if (fortuneTot > 7) {
 							 				$('.outcomeText').html('Death rolls both dice, and they both come up as 3.  Annoyed, the pale rider walks on and leaves you be.')
 							 				$('.outcomeTitle').html('Better lucky than dead!');
 							 				} 	
 							 			else {
 							 				$('.outcomeText').html(`The black dice rolled a ${blackDice}, and the white dice rolled a ${whiteDice}. `)
 							 				$('.outcomeTitle').html('You lost a gamble for your life.  Lose half HP');
 							 				HP = HP/2  
 							 				}
 							 },
 							 
 							 function(){   
 							 			if ( strengthTot > 8 || intelTot > 6 && fortuneTot > 6 ){
 							 				$('.outcomeText').html('You quickly overpower the pale rider, and surpirse him by grabbing the dice and shoving him to the ground.  By putting the dice in your pocket, no gamble or wager gets made.  ');
 							 				$('.outcomeTitle').html('You steal the dice and tell Death you are not a gambling man.'); 
 							 				brute = brute+1;charm=charm+1;  jerk = jerk+1;
 							 			}
 							 			else {
 							 				HP = 1;
 							 				$('.outcomeText').html('You were reckless!  Placing hands on the pale rider, your strength withers and leaves you.  The rider lets you hold on to one HP.' );
 							 				$('.outcomeTitle').html('The rider laughs and leaves you with 1 HP.');   	 							
 							 			}
 							 			
 							 }
 							]					
 				},{
 					name: 'Hunt the man-eating tiger',
 					desc: 'A group of people have asked for your help in stopping a bloodthirsty tiger from threatening their village.  You decide to confront it by: ',
 					choice1: 'Making a loud noise, and challenge it for dominance, Jungle Book style',
 					choice2: 'Crafting a trap that will lock it in a cage.',
 					choice3: 'um.. magic spells?',
 					effect: ['',
 							 function(){ if (strengthTot > 8  ) {
 							 				$('.outcomeText').text('Bloodied and beaten, the tiger decides that this food is not worth the trouble.  Maybe it will return, but not before it licks its wounds.');
 							 				$('.outcomeTitle').text('Kicked the tiger\'s ass!');  
 							 				brute=brute+1;
 							 			}
 							 			  							 			
 							 			else {
 							 				HP = HP - 7;
 							 				$('.outcomeText').html('The tiger proves to be resilient and you are unable to subdue it. Luckily, you see an opening and by chance strike a killing blow.');
 							 				$('.outcomeTitle').html('Almost killed by wrestling with the tiger.  <br><br> Lost 7 HP');  
 							 			
 							 			}
 
 							 },
 							 function(){
 							 			if (intelTot > 7) {
 							 				 
 							 				$('.outcomeText').text('You fashion a clever trap that leads the tiger into an empty house.  The tiger is sedated and then sold off to zookeepers.');
 							 				$('.outcomeTitle').text('Human ingenuity triumphs over nature');  
 							 				charm =charm+1;

 							 			} 

 							 			else { HP = HP - 8;
 							 				$('.outcomeText').text('You fashion a clever trap that leads the tiger into an empty house.  But the tiger escapes your trap, goes on a rampage, and mauls you before running off.');
 							 				$('.outcomeTitle').text('Should have studied harder! Lose 8 HP');   	
 							 				}
 							 },
 							 
 							 function(){   
 							 			arcane=arcane+1;	 	 							 			
 							 			if (typeClass == 'Mage' && MP >= 10){
 							 				$('.outcomeText').text('A brief struggle of minds occur, but you are able to completely mesmerize the tiger. ');
 							 				$('.outcomeTitle').html('Obedience spell success!.  <br><br> Used 10 MP.');  
 							 				MP = MP - 10;
 							 			}
 							 			else if (typeClass !== 'Mage' && MP > 10) {
 							 				$('.outcomeText').text('You cast a clumsy but effective spell that puts the tiger to sleep. Although you fumble a few times, you manage to get it right in the end.');
 							 				$('.outcomeTitle').html('Used Sleep spell, but suffered minor injuries!.  <br><br> Used 10 MP, lost 5 HP.'); 
 							 				MP = MP -10;
 							 				HP = HP -5; 
 							 				}
 							 			else {
 							 				HP = HP -8;
 							 				$('.outcomeText').html('You require more MP and fail in the attempt.  Tiger mauls you and you are lucky to not be eaten.  Lose 8 HP' );
 							 				$('.outcomeTitle').html('Your spells have no effect on the tiger.  HP-8');   	 							
 							 			}
 							 }
 							] 	
 				}


 		]
		
 		//Global functions for ease of reach

		var checkStrBonus = function(){
				if (strengthBonus > 0){ return `( + ${strengthBonus})`}
				else {return ``}
			}	 
		var checkIntBonus = function(){
				if (intelBonus > 0){ return `( + ${intelBonus})`}
				else {return ``}
			}	
		var checkFortBonus = function(){
				if (fortuneBonus > 0){ return `( + ${fortuneBonus})`}
				else {return ``}
			}	

		var randomItem = function() {
	 		return Math.floor((Math.random() * items.length) + 0); 
	 		
	 		}

	 	var randomScenario = function() {
	 		return Math.floor((Math.random() * scenarios.length) + 0);
	 		}


var charMaker = {};

	 
	charMaker.runScenario = function() {
			var loadScenario = function(e){
			$('#scenario').removeClass('hidden')
			$('.scenarioName').text(scenarios[e].name)
			$('.scenarioDesc').html(scenarios[e].desc)
			$('.choice1').text(scenarios[e].choice1)
			$('.choice2').text(scenarios[e].choice2)
			$('.choice3').text(scenarios[e].choice3)
			currentScenario = e;
			
			}

			loadScenario(randomScenario());
			
			$('form#actions').on('submit', function (f){
				f.preventDefault();
				
					var playerAction = $(this).find('input:checked').val();

					if (playerAction == 1) {
						scenarios[currentScenario].effect[1]();
					}

					else if (playerAction == 2 ) {
						scenarios[currentScenario].effect[2]();
					}

					else if (playerAction ==3) { 
						scenarios[currentScenario].effect[3]();
					}

					else 
						{
							alert('Please select an action');
							charMaker.runScenario(e);
					}
					
				

				if (scenarioCount <= 4) {
					
				$('#scenario').addClass('hidden');
				$('#outcome').removeClass('hidden');
				charMaker.statTally();
				charMaker.encounterOutcome(); 
				charMaker.statTally();

			}


			})			

		}

	charMaker.encounterOutcome = function(){
					$('form#nextStage').on('submit', function(x){
					x.preventDefault();
			  
					if (scenarioCount <= 3) {

						charMaker.runScenario(); 
						playerAction = '';
						$('#scenario').removeClass('hidden');
						$('#outcome').addClass('hidden');
						// scenarios.splice(currentScenario,1)
						 
						scenarioCount = scenarioCount + 1;
						
					}
					else {
						(console.log('the end'))
						$('#outcome').addClass('hidden');
						$('#ending').removeClass('hidden');
						
						if (brute > 2){
							$('.endingText').html('Your title is: <br><b>UNSTOPPABLE</b><br>Your feats place you in the ranks of the strongest heroes. ')
							}
						if (charm >2 ) {
							$('.endingText').html('Your title is: <br><b>THE CLEVER ONE</b><br>Your wits and quick thinking serve you better than most.')
						}	
						if (arcane >2) {
							$('.endingText').html('Your title is: <br><b>ARCHMAGE</b><br>You are invited to the circle of druids.')
						}
						if (jerk > 2) {
							$('.endingText').html('Your title is: <br><b>BANDIT</b><br>You are reviled but no one dares mess with you. ')
						}
						if ( brute < 2 && charm < 2 && arcane < 2 && jerk <2){ 
							$('.endingText').html('Your rank is: <br><b>THE BOLD</b><br>You were reckless, but credit for trying!')}

						if (HP <= 0 ) {
							$('.endingText').append('<br><br>It seems your HP fell below 0.  This means you died and completed the game as a Zombie.')
							}	
					}
				})	
	}	


	charMaker.namer = function(){
		$('form#login').on('submit', function(e){
        e.preventDefault();
        var loginName = $(this).find('input').val();
 
        username = loginName;

         $('#randomName').addClass('hidden')
         $('#charName').addClass('hidden')
		 $('#loggedin').removeClass('hidden');
		 $('#charSelector').removeClass('hidden')
		 $('#user').text(username)
		 $('#allocated').html(pointsStart)


		});
	}

	charMaker.random = function(){
		$('form#generate').on('submit', function(f){
			f.preventDefault();
			$('input[name=login]').val(randomName)
		})


	//This function prints HP & MP when necessary
	}
	charMaker.printHP = function(HP) {
		$('#HPbox').html('HP : ' + HP )
	}
	charMaker.printMP = function(MP) {
		$('#MPbox').html('MP : ' + MP )
	}


	// This function establishes stats after effects modify them
	charMaker.statTally = function() {
		strengthTot = strengthVal + strengthBonus;
		intelTot = intelVal + intelBonus;
		fortuneTot = fortuneVal + fortuneBonus;

	    $('.strengthVal').text(strengthVal); $('.strengthBonus').text(strengthBonus);
	    $('.intelVal').html(intelVal); $('.intelBonus').html(intelBonus);
	    $('.fortuneVal').html(fortuneVal); $('.fortuneBonus').html(fortuneBonus);	

	   	 charMaker.printHP(HP);charMaker.printMP(MP);
			$('#stats').html(
				`   <br>Strength: ${strengthVal}  ${checkStrBonus()} <br>
				    Intelligence: ${intelVal}  ${checkIntBonus()}<br>
				    Fortune: ${fortuneVal}  ${checkFortBonus()}<br>
				`)	   	 
	}

	// Module for choosing class
	charMaker.classer = function() {
		$('form#charTypeClass').on('submit', function(g){
		g.preventDefault();
        
        typeClass = $(this).find('input:checked').val();
        
 
        
	        if  (typeClass === 'Hero' ){
	        	 $('#charClass').html('<br> Class: Hero <br>')
	        
	        	 
	        	 HP = 20; MP = 10;
	        	

	        	 strengthVal = 4; $('.strengthVal').text(strengthVal); $('.strengthBonus').text(strengthBonus);
	        	 intelVal = 2; $('.intelVal').html(intelVal); $('.intelBonus').html(intelBonus);
	        	 fortuneVal = 1; $('.fortuneVal').html(fortuneVal); $('.fortuneBonus').html(fortuneBonus);
		          strengthTot = strengthVal + strengthBonus;
		          $('#charSelector').addClass('hidden');
		          $('#allocator').removeClass('hidden')	
		          charMaker.printHP(HP);charMaker.printMP(MP); 


	        }
	        else if (typeClass === 'Mage' ){
	        	$('#charClass').html('<br> Class: Mage <br>')
	        	 HP = 10; MP = 20;
	        	 

	        	 strengthVal = 1; $('.strengthVal').html(strengthVal); $('.strengthBonus').html(strengthBonus);
	        	 intelVal = 4; $('.intelVal').html(intelVal); $('.intelBonus').html(intelBonus);
	        	 fortuneVal = 2; $('.fortuneVal').html(fortuneVal); $('.fortuneBonus').html(fortuneBonus)	        	
		          $('#charSelector').addClass('hidden');
		          $('#allocator').removeClass('hidden')
		          charMaker.printHP(HP);charMaker.printMP(MP);

	        }
	        else if (typeClass === 'Rogue' ) {
	        	$('#charClass').html('<br> Class: Rogue <br>') 
	        	 HP = 15; MP = 15;
	        

	        	 strengthVal = 2; $('.strengthVal').html(strengthVal); $('.strengthBonus').html(strengthBonus)
	        	 intelVal = 2; $('.intelVal').html(intelVal); $('.intelBonus').html(intelBonus)
	        	 fortuneVal = 3; $('.fortuneVal').html(fortuneVal); $('.fortuneBonus').html(fortuneBonus)
		          $('#charSelector').addClass('hidden');
		          $('#allocator').removeClass('hidden')	  
		          charMaker.printHP(HP);charMaker.printMP(MP);      

	        }	 
	        else {alert('Please select a class');charMaker.classer()}

	          


		})

	}

	//Module for allocating bonus points and 
	charMaker.allocator = function() {


		$('span#strengthUp').on('click', function(){
			if (pointsStart > 0){
			pointsStart= pointsStart -1;
			$('#allocated').html(pointsStart)
			strengthBonus = strengthBonus + 1;
			$('.strengthBonus').html(strengthBonus)
			$('.allocatorAlert').addClass('hidden')
			}
		});

		$('span#strengthDown').on('click', function(){
			if (pointsStart < 10 && strengthBonus > 0){
			pointsStart= pointsStart +1;
			$('#allocated').html(pointsStart)
			strengthBonus = strengthBonus -1;
			$('.strengthBonus').html(strengthBonus)
			$('.allocatorAlert').addClass('hidden')
			}


		});	

		$('span#intelUp').on('click', function(){
			if (pointsStart > 0){
			pointsStart= pointsStart -1;
			$('#allocated').html(pointsStart)
			intelBonus = intelBonus + 1;
			$('.intelBonus').html(intelBonus)
			$('.allocatorAlert').addClass('hidden')
			}
		});

		$('span#intelDown').on('click', function(){
			if (pointsStart < 10 && intelBonus > 0){
			pointsStart= pointsStart +1;
			$('#allocated').html(pointsStart)
			intelBonus = intelBonus - 1;
			$('.intelBonus').html(intelBonus)
			$('.allocatorAlert').addClass('hidden')
			
			}


		});			

		$('span#fortuneUp').on('click', function(){
			if (pointsStart > 0){
			pointsStart= pointsStart -1;
			$('#allocated').html(pointsStart)
			fortuneBonus = fortuneBonus + 1;
			$('.fortuneBonus').html(fortuneBonus)
			$('.allocatorAlert').addClass('hidden')
			
			}
		});

		$('span#fortuneDown').on('click', function(){
			if (pointsStart < 10 && fortuneBonus > 0){
			pointsStart= pointsStart +1;
			$('#allocated').html(pointsStart)
			fortuneBonus = fortuneBonus - 1;
			$('.fortuneBonus').html(fortuneBonus)
			$('.allocatorAlert').addClass('hidden')
			}


		});	



		$('#allocator button').on('click', function(h){
			h.preventDefault();
			if(pointsStart >0) {
				$('.allocatorAlert').removeClass('hidden')		

			}
			else {
				$('.allocatorAlert').addClass('hidden')
 


			charMaker.statTally();
	       


	 
			$('#allocator').addClass('hidden')
			$('#lootBox1').removeClass('hidden')
		 
 
 			}
 		})
	}

	charMaker.lootBox1 = function (){
		

	 	$('form#chest1').on('submit', function(k) {
	 	k.preventDefault();
	 	$('#lootBox1').addClass('hidden')

	 	charMaker.looter(randomItem());
	 	$('#lootBox2').removeClass('hidden')


	 	})


	 }
	 charMaker.looter = function(e){
	 	    $('#equip').append(
	 	 
	 		items[e].name +'<br>'+
	 		items[e].desc + '<br><br>')
	 		items[e].effect();
	 		charMaker.statTally();
	 		items[e].on = true;
	 		
	 }

	 charMaker.lootBox2 = function (){
		

	 	$('form#chest2').on('submit', function(l) {
	 	l.preventDefault();
	 	$('#lootBox2').addClass('hidden')

	 	charMaker.looter(randomItem());
	 	$('#startGame').removeClass('hidden')
	 	

	 	})


	 }

	 charMaker.closeStatsBox = function() {
	 	$('.bigButton').on('click', function() {
	 		$('.opener').addClass('interfaceShort');
	 		$('#menuButton').removeClass('hidden')
	 		$('.bigButton').text('Back to Game');
	 		$('#startGame').addClass('hidden');
	 		$('#gameScreen').removeClass('hidden');

	 	})
	 	
	 }

	 charMaker.openStatsBox = function() {
	 	$('#menuButton').on('click', function(){
	 		$('.opener').removeClass('interfaceShort');
	 		$('#menuButton').addClass('hidden');
	 		$('#startGame').removeClass('hidden');
	 		$('#gameScreen').addClass('hidden');
	 	})

	 }

	 

	charMaker.init = function(){
 		charMaker.namer();
 		charMaker.random();
		charMaker.classer();
		charMaker.allocator();
		charMaker.lootBox1();
		charMaker.lootBox2();
		charMaker.closeStatsBox();
		charMaker.openStatsBox();
		
	 
		charMaker.runScenario();
	 
	}



$(function(){

 charMaker.init();


});
 