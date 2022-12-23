// code your solution here

function saturdayFun(activity ) {
    if (activity === 'bathe my dog') {
      return `This Saturday, I want to bathe my dog!`;
    }
    return `This Saturday, I want to roller-skate!`;
  }


  function mondayWork(activity  ) {
    if (activity === 'work from home') {
        return "This Monday, I will work from home."
      }
      return "This Monday, I will go to the office."
    }

    function wrapAdjective(wrapper) {
        return function(adjective) {
          return 'You are ' + wrapper + adjective + wrapper + '!';
        }
      }
      
  