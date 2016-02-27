filename = "SIR_GDR/CS_OFFL_SIR_GDR_2__20151201T002136_20151201T020049_C001.DBL"

with open(filename, 'rb') as f:
	while 1:

		byte_s = f.read(1)
		if not byte_s:
			break
		byte = byte_s[0]