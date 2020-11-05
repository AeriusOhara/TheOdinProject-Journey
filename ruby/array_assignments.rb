def header
	puts '============================================='
	puts "Reminder: Press Ctrl+C to exit this exercise.\n"
end

def footer
	puts "Press 'Y' key to restart this exercise Any other\n"
	puts "key to quit the app.\n"
	choice = gets.chomp
	if choice != 'Y' || choice != 'y'
		return true
	else
		return false
	end
end

#---------------------------------------------------------------
#---------------------------------------------------------------
#---------------------------------------------------------------

def number_comparer
	

	puts "Please enter a number from 0 to 100.\n"
	num = gets.chomp.to_i

	if num <= 0
		puts "The number you entered (#{num}) is in the range of 0 to 50.\n"
	else 
		# puts num > 100 ? "The number you entered (#{num}) is above 100." : "The number you entered (#{num}) is in the range 51 to 100."
		if num > 100
			puts "The number you entered is (#{num}) above 100\n"
		else
			puts "The number you entered is (#{num}) in the range 51 to 100.\n"
		end
	end

	footer()
end

def increment_array_by2
	arr = [0, 2, 4, 6, 8]
	arr2 = []

	arr.each_with_index do |n, i|
		arr2[i] = (n + 2)
	end

	puts arr2
end

#while false
#	header()
#
#	# number_comparer()
#	
#	footer()
#end

increment_array_by2()
