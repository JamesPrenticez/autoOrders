Attribute VB_Name = "Module9"
Sub Save_CSV_As_CSV()
Attribute Save_CSV_As_CSV.VB_ProcData.VB_Invoke_Func = "e\n14"

Dim ws As Worksheet
Dim SheetList As Variant
Dim TestList As Variant
  
SheetList = Array("240 csv", "070 csv", "089_1 csv", "089_2 csv", "080 csv", "085 csv", "105 csv", "105_1 csv", "030 csv", "575 csv", "575_1 csv", "150 csv", "195 csv", "200 csv", _
                  "180 csv", "210_2 csv", "215 csv", "575_2 csv", "160 csv", "210_1 csv ", "210 csv", "135 csv", "235 csv", "245 csv", "140 csv", "135_1 csv", "245_1 csv", "295 csv", _
                  "295_1 csv", "385 csv", "380_1 csv", "490 csv", "490_1 csv", "490_7 csv", "490_2 csv", "490_3 csv", "230 csv", "260 csv", "100 csv", "100_1 csv", "088 csv", "495 csv", _
                  "475 csv", "475_1 csv", "470 csv", "470_3 csv", "470_2 csv", "505 csv", "505_1 csv", "495_1 csv", "300 csv", "320 csv", "340 csv", "380 csv", "355 csv", "550 csv", _
                  "305 csv", "310 csv", "310_1 csv", "395 csv", "400 csv", "405 csv", "405_1 csv", "405_2 csv", "440 csv", "460 csv", "455 csv", "455_1 csv", "535 csv", "535_1 csv", _
                  "545 csv", "525_2 csv", "510 csv", "530 csv", "525 csv", "555 csv", "350 csv", "410 csv", "240 csv ", "425_1 csv", "435_1 csv", "425 csv", "425_2 csv", "470_1 csv", _
                  "435 csv", "465 csv", "465_1 csv", "490_4 csv", "490_5 csv", "490_6 csv", "545_1 csv", "605 csv", "555_1 csv", "001 csv")

TestList = Array("240 csv", "070 csv")

'Loop through each worksheet
For Each ws In ActiveWorkbook.Worksheets
'Check worksheet name matches out array
    If IsInArray(ws.Name, SheetList) = True Then
'Save as
        ws.SaveAs Filename:=ThisWorkbook.Path & "/" & ws.Name, FileFormat:=xlCSV
    End If
Next ws
End Sub
Function IsInArray(stringToBeFound As String, arr As Variant) As Boolean
  IsInArray = UBound(Filter(arr, stringToBeFound)) > -1
End Function
Item(0)
                        With xEmailObj
                            .Display
                            .To = ws                                                                                                                                                                                                                                                                                                                                               �   �      �   �             (           W      �