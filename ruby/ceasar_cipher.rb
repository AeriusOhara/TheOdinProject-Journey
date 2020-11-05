# Turns out user input is annoying, so in order to check whether gets input
# given was a number or not I came acrosss this on Stackoverflow.
# https://stackoverflow.com/a/5661695
def is_number? string 
	true if Integer(string) rescue false
end

def cipher()
	char_array = %w[a b c d e f g h i j k l m n o p q r s t u v w x y z]
	input_ciphered = []
	alphabet_size = char_array.size

	print "Please enter a word or sentence you'd like to run ceasar's cipher on: "
	input = ''
	input = gets.chomp.strip while input.empty?

	print "Please enter a number you'd like to shift your input by: "
	shift = 0
	while !is_number?(shift) || shift.zero?
		# Keep asking for a number as long as no number is given
		tmp = gets.chomp.strip

		if is_number?(tmp)
			shift = tmp.to_i
		else 
			print "That's not a number, please try again: " 
		end
	end

	# Go through the input one character at a time and add the legal 
	# inputs to an array
	input.each_char do |value|
		processed_char = ''

		# Check if the character we're processing is in the allowed
		# characters array
		if char_array.include? value.downcase
			# Process the char
			processed_char = char_array[(char_array.index(value.downcase) + shift) % alphabet_size]

			# Restore upcase if the original was uppercase
			if !!value.match(/[A-Z]/)
				processed_char = processed_char.upcase
			end

			input_ciphered.push(processed_char)
		end
	end

	puts("Result: #{input_ciphered.join}")
end

cipher()
