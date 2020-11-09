def stock_picker(days_array)
	results = Hash.new(0)
	buy_amount = 0
	sell_amount = 0
	buy_day = 0
	sell_day = 0
	profit = 0
	
	# We're gonna loop through the entire array comparing the
	# current (index) buy value to the rest of the values in
	# the array beyond the current to see if they are higher
	# if yes we store them and in the end make a comparison
	# to see which pairs give the biggest difference (profit)
	days_array.length.times do |index|
		buy_amount = days_array[index]
		sell_amount = days_array[index]
		buy_day = index
		
		# Check the array's values from current index to the last
		# entry in the array and compare  
		days_array[index..days_array.length].length.times do |index2|
			next_index = index + index2
			next_sell_amount = days_array[next_index]
			
			# If the amount in the next index is higher, set the
			# appropriate vaiables (useless comment?)
			if next_sell_amount > sell_amount
				sell_amount = next_sell_amount
				sell_day = next_index
			end
		end

		# If we end up with a buy_amount that's lower than a
		# sell_amount, add it to the hash and we'll make a 
		# comparison in the end
		results[buy_day] = sell_day if buy_amount < sell_amount
	end

	# If we have no results, then too bad
	if !results.empty?
		results.map do |key, value|
			# Skip the iteration if the current entry is lower
			# than the profit we already have
			next if (days_array[value] - days_array[key]) <= profit

			profit = (days_array[value] - days_array[key])
			buy_day = key
			sell_day = value
		end

		# puts results
		puts "Buy on day ##{buy_day} and sell on day ##{sell_day} for a profit of $#{profit}\n\n"
	else 
		puts "The given array contains no way to make profits.\n\n"
	end
end

stock_picker([17, 3, 6, 9, 15, 8, 6, 1, 10])
stock_picker([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) # Should be unprofitable

# Results when ran:
#	Buy on day #1 and sell on day #4 for a profit of $12
#	The given array contains no way to make profits.
