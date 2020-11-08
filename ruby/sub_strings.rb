# def sub_string(inputString, dictionary)
#	regex = "/" + inputString + "/"
#	processed_string = []
#	tmp_string = ''
#
#	input_length = inputString.length
#
#	# Loop through the input we've been given one
#	 character at a time
#	#inputString.each_char.with_index do |value, index|
#		tmp_string = inputString[index]
#		(input_length - (index+1)).times do |index2|
#			tmp_string.concat(inputString[index+(index2+1)])
#			puts "Checking if \"#{tmp_string}\" exists in dictionary"
#			processed_string.push(tmp_string) if dictionary.any? tmp_string
#		end
#	#end
#	puts dictionary
#	
#	puts processed_string.join
# end

def sub_string2(input_string, dictionary)
	# Make sure there's no special characters apart from spaces
	input_string.gsub!(/[^A-Za-z ]/, '')

	# Split the input into an array and create the result hash
	input_array = input_string.split(' ')
	found_words = Hash.new(0)
	
	# Recreate the dictionary downcased
	downcase_dictionary = dictionary.map(&:downcase)

	input_array.each.with_index{ |value, index|
		# Loop through each word and see if you can find parts of it
		# in the dictionary
		value.each_char.with_index{ |value2, index2|
			temp_string = value[0 .. ((value.length - 1) - index2)]
			
			if downcase_dictionary.include? temp_string.downcase
				found_words[temp_string] += 1
			end
		}
	}
	
	puts foundwords
end

dictionary = %w[below down go going horn how howdy it i low own part partner sit]

sub_string2("Howdy partner, sit down! How's it going?", dictionary)
