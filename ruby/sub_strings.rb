# I couldn't completely figure it out, turns out I forgot to iterate
# through the substring with another substring of its own. I peeked
# through other peoples' code and was able to solve it eventually
def sub_string(input_string, dictionary)
	# Make sure there's no special characters apart from spaces
	input_string.gsub!(/[^A-Za-z ]/, '')

	# Split the input into an array and create the result hash
	input_array = input_string.split(' ')
	found_words = Hash.new(0)
	
	# Recreate the dictionary downcased
	downcase_dictionary = dictionary.map(&:downcase)

	# Loop through each word given by the user and see if
	# you can find parts of it in the dictionary
	input_array.each do |word|
		# For each word, we'll be looping for however many 
		# characters its got ("howdy" -> 5 loops)
		(word.length-1).times do |word_position|
			# Each loop will select the next character of the
			# word. And with the next loop below we'll loop 
			# through the rest of the remaining word to check 
			# if the substring has any matching words of the 
			# dictionary and it'll operate like this:
			# Howdy:
			#	H -> Ho -> How -> Howd -> Howdy
			#	o -> ow -> owd -> owdy
			#	w -> wd -> y
			#	d -> dy
			#	y
			(word_position..(word.length-1)).each do |substr_position|
				# Finally check if the substring matches any
				# words in the dictionary
				substr_word = word[word_position..substr_position]

				if downcase_dictionary.include? substr_word.downcase
					found_words[substr_word] += 1
				end
			end
		end
	end

	found_words.each do |word, count|
		puts "#{count}x #{word}"
	end
end

dictionary = %w[below down go going horn how howdy it i low own part partner sit]

sub_string("Howdy partner, sit down! How's it going?", dictionary)
