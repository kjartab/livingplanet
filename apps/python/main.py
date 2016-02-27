import xml.etree.ElementTree as ET 
import os


tree = ET.parse('SIR_GDR/CS_OFFL_SIR_GDR_2__20151201T002136_20151201T020049_C001.DBL')
root = tree.getroot()
print root
print tree
for elem in root.iter('Option'):
	print elem

	