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

	input_array.each{ |word|
		# Loop through each word and see if you can find parts of it
		# in the dictionary
		word.length.times{ |word_position|
			word_substring = word[word_position..word.length]

			word_substring.length.times{ |word_substr_index|
				substr_word = word[word_position..(word_position + word_substr_index)]
				
				# puts "Checking if \"#{temp_string.downcase}\" exists in dictionary"
				if downcase_dictionary.include? substr_word.downcase
					found_words[substr_word] += 1
					# puts " -> It does!"
				end
			}
		}
	}

	found_words.each do |word, count|
		puts "#{count}x #{word}"
	end
end

dictionary = %w[below down go going horn how howdy it i low own part partner sit]

sub_string("Howdy partner, sit down! How's it going?", dictionary)
