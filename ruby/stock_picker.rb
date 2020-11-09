# store every pair that has a low value followed 
# by a high value in a hash, and then in the end
# iterate it, subtracting lowest value from
# the highest value for each entry. Whichever
# has the highest result wins

def stock_picker(days_array)
	results = Hash.new(0)
	buy_amount = 0
	buy_day = 0
	sell_amount = 0
	sell_day = 0
	highest = 0
	

	days_array.length.times do |index|
		
		buy_amount = days_array[index]
		buy_day = index

		sell_amount = days_array[index]
		# puts "Loop #{(days_array.length - index)} times!"
		
		days_array[index..days_array.length].length.times do |index2|
			next_index = index + index2
			tmp_sell_amount = days_array[next_index]
			
			# puts "Is #{tmp_sell_amount} > #{sell_amount}? (index: #{next_index})"
			if tmp_sell_amount > sell_amount
				# puts " -> Yes it is! (index: #{next_index})"
				sell_amount = tmp_sell_amount
				sell_day = next_index
			end
		end

		# puts "Adding buying on day #{buy_day} and selling on #{sell_day} | Profit: #{sell_amount - buy_amount}" if buy_amount < sell_amount
		results[buy_day] = sell_day if buy_amount < sell_amount
		# puts "\n"
	end

	results.map do |key, value|
		if (days_array[value] - days_array[key]) > highest
			highest = (days_array[value] - days_array[key])
			buy_day = key
			sell_day = value
		end
	end

	puts highest
	puts results
	puts "Buy on day ##{buy_day} and sell on day ##{sell_day} for a profit of $#{highest}"
end

stock_picker([17, 3, 6, 9, 15, 8, 6, 1, 10])
