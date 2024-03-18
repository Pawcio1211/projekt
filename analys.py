import cv2 as cv


img = cv.imread("pexels-photo-807598.jpeg")
font = cv.FONT_HERSHEY_DUPLEX
cv.putText(img,'hej dziala',(10,500),font,4,(255,255,255))

cv.imshow("displey window",img)
k = cv.waitKey(0)

