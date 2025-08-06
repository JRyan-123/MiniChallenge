<?php



class Rates
{
	    private static $rates = [
	    	'manager'	=>	1000,
	    	'staff'		=>	750,
	    	'intern'	=>	500
	    ];

	    public static function getRate(string $position): int
	    {
	    	
	        return self::$rates[$position] ?? 0;
	    }
}
