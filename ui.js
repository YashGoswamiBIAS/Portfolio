class BoolListener
{
    constructor()
    {
        var ifTrue ;
        var ifFalse ;
        var Bool ;
        var Fire = undefined ;
        Object.assign(this,{
            watch : (watchBool)=>{
                Bool = watchBool ;
            },
            then : (True)=>{
                ifTrue = True ;
            },
            else : (False)=>{
                ifFalse = False ;
            },
            enable : (condition)=>{
                if (condition)
                {
                    Fire = true ;
                    let LastRun = undefined ;
                    (function BoolLoop(){
                        setTimeout(function() {
                            // Your logic here
                            if (Bool())
                            {
                                if (LastRun==false)
                                {
                                    ifTrue() ;
                                }
                                LastRun = true ;
                            }
                            else
                            {
                                if (LastRun==true)
                                {
                                    ifFalse() ;
                                }
                                LastRun = false ;
                            }
                            if (Fire)
                            {
                                BoolLoop();
                            }
                        }, 0);
                        })();    
                }
                else
                {
                    Fire = false ;
                }
            }
        });
    }
}