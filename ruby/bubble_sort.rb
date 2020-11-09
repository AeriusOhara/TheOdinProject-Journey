def bubble_sort(array)
	sorted = false

	# Loop until we've sorted the entire array by
	# comparing current value with next
	# Swapping them if the next value than current
	until sorted
		sorted = true
		(array.length - 1).times do |index|
			# Skip iteration if the current is larger
			# than next
			next if array[index] >= array[(index + 1)]
			
			# We're not done sorting!
			# Swap the current with next
			sorted = false
			tmp = array[index]
			array[index] = array[(index + 1 )]
			array[(index + 1)] = tmp
		end
	end

	puts "Bubble sorted:\n#{array.join(', ')}\n\n"
end

bubble_sort([4, 3, 78, 2, 0, 2])
bubble_sort([10, 13, 14, 17, 19, 25, 38, 48, 58, 68, 79, 81, 99])
bubble_sort([5, 4, 3, 2, 1])

# Results when ran:
#  Bubble sorted:
#  78, 4, 3, 2, 2, 0

#  Bubble sorted:
#  99, 81, 79, 68, 58, 48, 38, 25, 19, 17, 14, 13, 10

#  Bubble sorted:
#  5, 4, 3, 2, 1
